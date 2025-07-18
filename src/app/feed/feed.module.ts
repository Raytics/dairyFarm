import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedManagementComponent } from './feed-management/feed-management.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddFeedComponent } from './feed-management/add-feed/add-feed.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedManagementComponent,
    AddFeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class FeedModule { }
