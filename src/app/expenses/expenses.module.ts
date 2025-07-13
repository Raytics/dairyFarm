import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseDataComponent } from './expense-data/expense-data.component';


@NgModule({
  declarations: [
    ExpenseDataComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
