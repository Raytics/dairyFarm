import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // ✅ This is missing!


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class AuthModule { }
