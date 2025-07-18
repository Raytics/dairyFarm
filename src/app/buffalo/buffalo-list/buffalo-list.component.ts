import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-buffalo-list',
  templateUrl: './buffalo-list.component.html',
  styleUrls: ['./buffalo-list.component.scss'],
})
export class BuffaloListComponent {
  buffaloList = [
    { id: 1, name: 'Ganga', breed: 'Murrah', age: 4, status: 'Healthy' },
    { id: 2, name: 'Yamuna', breed: 'Jafarabadi', age: 6, status: 'Sick' },
    {
      id: 3,
      name: 'Saraswati',
      breed: 'Mehsana',
      age: 3,
      status: 'under observation',
    },
    { id: 3, name: 'Saraswati', breed: 'Mehsana', age: 3, status: 'default' },
  ];
  constructor(private animalService: AnimalService, private router: Router) {}
  dynamicClasses(status: string) {
    switch (status.toLowerCase()) {
      case 'healthy': {
        return 'healthy-badge';
      }
      case 'sick': {
        return 'sick-badge';
      }
      default: {
        return 'unknown-badge';
      }
    }
  }
  deleteAnimal(buffaloId: any) {
    this.animalService.deleteAnimal(buffaloId).subscribe((res: any) => {
      console.log('deleted successfully', res.status);
    });
  }

  addBuffalo() {
    this.router.navigate(['']);
  }
  editBuffaloDetails(buffalo: any) {
    this.router.navigate(['animal/edit-buffalo-details/', buffalo.id]);
  }
}
