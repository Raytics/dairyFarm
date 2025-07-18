import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuffaloRoutingModule } from './buffalo-routing.module';
import { BuffaloListComponent } from './buffalo-list/buffalo-list.component';
import { AddBuffaloComponent } from './buffalo-list/add-buffalo/add-buffalo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuffaloListComponent,
    AddBuffaloComponent
  ],
  imports: [
    CommonModule,
    BuffaloRoutingModule,
    ReactiveFormsModule
  ]
})
export class BuffaloModule { }
