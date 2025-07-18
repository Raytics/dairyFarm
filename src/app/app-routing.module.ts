import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: '***',
  redirectTo: 'login'
},
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  loadChildren: ()=> import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path: 'animal',
  loadChildren: ()=> import('./buffalo/buffalo.module').then(m=> m.BuffaloModule)
},
{
  path: 'feed',
  loadChildren: ()=> import ('./feed/feed.module').then(m => m.FeedModule)
},
{
  path: 'milk',
  loadChildren: ()=> import ('./milk/milk.module').then(m=> m.MilkModule)
},
{
  path: 'employee',
  loadChildren: ()=>import('./human/human.module').then(m=> m.HumanModule)
},
{
  path: 'health',
  loadChildren:()=> import('./health/health.module').then(m=> m.HealthModule)
},
{
  path: 'finance',
  loadChildren:()=> import ('./expenses/expenses.module').then(m=> m.ExpensesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
