import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuffaloRoutingModule } from './buffalo-routing.module';
import { BuffaloListComponent } from './buffalo-list/buffalo-list.component';


@NgModule({
  declarations: [
    BuffaloListComponent
  ],
  imports: [
    CommonModule,
    BuffaloRoutingModule
  ]
})
export class BuffaloModule { }
