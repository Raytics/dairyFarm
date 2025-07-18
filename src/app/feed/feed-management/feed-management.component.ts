import { Component } from '@angular/core';

@Component({
  selector: 'app-feed-management',
  templateUrl: './feed-management.component.html',
  styleUrls: ['./feed-management.component.scss']
})
export class FeedManagementComponent {
 feedColumns: string[] = ['name', 'quantity', 'date', 'actions'];
  feedData = [
    { name: 'Green Fodder', quantity: 100, date: new Date() },
    { name: 'Dry Fodder', quantity: 50, date: new Date() },
  ];

  openFeedDialog() {
    console.log('Open Create Feed Dialog');
    // You can open a modal here using Angular Material Dialog
  }

  editFeed(feed: any) {
    console.log('Edit Feed:', feed);
  }

  deleteFeed(feedId: number) {
    console.log('Delete Feed ID:', feedId);
  }
}
