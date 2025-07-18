import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedManagementComponent } from './feed-management/feed-management.component';
import { AddFeedComponent } from './feed-management/add-feed/add-feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedManagementComponent
  },
  {
    path: 'add-feed',
    component: AddFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
