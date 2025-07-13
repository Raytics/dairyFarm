import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
email = '';
  password = '';
  selectedRole = '';
  darkMode = false;

  constructor(private router: Router) {}

  toggleTheme() {
    document.body.classList.toggle('dark-theme', this.darkMode);
  }

  login() {
    if (this.selectedRole === 'admin') {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('user', JSON.stringify({ name: 'Admin', role: 'admin' }));
    } else {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('user', JSON.stringify({ name: 'User', role: 'user' }));
    }
    this.router.navigate(['/dashboard']);
  }
}
