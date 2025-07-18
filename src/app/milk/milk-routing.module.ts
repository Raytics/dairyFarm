import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilkHistoryComponent } from './milk-history/milk-history.component';

const routes: Routes = [{
  path: '',
  component: MilkHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkRoutingModule { }
