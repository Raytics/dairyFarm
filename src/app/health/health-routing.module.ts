import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthManagementComponent } from './health-management/health-management.component';

const routes: Routes = [
  {
    path: '',
    component: HealthManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
