import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedManagementComponent } from './feed-management.component';

describe('FeedManagementComponent', () => {
  let component: FeedManagementComponent;
  let fixture: ComponentFixture<FeedManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedManagementComponent]
    });
    fixture = TestBed.createComponent(FeedManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
