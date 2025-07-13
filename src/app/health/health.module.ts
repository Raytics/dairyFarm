import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthManagementComponent } from './health-management/health-management.component';


@NgModule({
  declarations: [
    HealthManagementComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule
  ]
})
export class HealthModule { }
