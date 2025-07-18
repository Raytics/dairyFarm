import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-buffalo',
  templateUrl: './add-buffalo.component.html',
  styleUrls: ['./add-buffalo.component.scss']
})
export class AddBuffaloComponent {
isEditMode: boolean = false;
buffaloForm!: FormGroup;

constructor(private fb: FormBuilder){
  this.buffaloForm=this.fb.group({
    name:[''],
    breed: [''],
    age: [''],
    status: ['']
  });
}
ngOnInit(){

}

onSubmit(){
  console.log(this.buffaloForm.value);
}

}
