import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkRoutingModule } from './milk-routing.module';
import { MilkHistoryComponent } from './milk-history/milk-history.component';


@NgModule({
  declarations: [
    MilkHistoryComponent
  ],
  imports: [
    CommonModule,
    MilkRoutingModule
  ]
})
export class MilkModule { }
