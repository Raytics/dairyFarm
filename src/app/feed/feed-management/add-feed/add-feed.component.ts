import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.scss']
})
export class AddFeedComponent {
feedForm!: FormGroup;
constructor(private fb: FormBuilder){
  this.feedForm=this.fb.group({
    name:[''],
    type:[''],
    quantity: [''],
    date: [''],
    address: this.fb.group({
      line1: ['asjjs']
    })
  });
}
onSubmit(){
 console.log(this.feedForm.value);
}
}
