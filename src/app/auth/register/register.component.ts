import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
name: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  role: string = '';

  register() {
    console.log('Registration data:', {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      password: this.password,
      role: this.role
    });
    // Call backend API here
  }
}
