import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanRoutingModule } from './human-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    HumanRoutingModule
  ]
})
export class HumanModule { }
