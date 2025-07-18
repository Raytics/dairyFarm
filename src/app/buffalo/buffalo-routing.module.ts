import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuffaloListComponent } from './buffalo-list/buffalo-list.component';
import { AddBuffaloComponent } from './buffalo-list/add-buffalo/add-buffalo.component';

const routes: Routes = [{
  path: '',
  component: BuffaloListComponent
},
{
  path: 'add-buffalo',
  component: AddBuffaloComponent
},
{
  path: 'edit-buffalo-details/:id',
  component: AddBuffaloComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuffaloRoutingModule { }
