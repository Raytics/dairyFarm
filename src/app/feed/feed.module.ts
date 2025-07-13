import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedManagementComponent } from './feed-management/feed-management.component';


@NgModule({
  declarations: [
    FeedManagementComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
