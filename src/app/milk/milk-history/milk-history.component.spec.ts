import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkHistoryComponent } from './milk-history.component';

describe('MilkHistoryComponent', () => {
  let component: MilkHistoryComponent;
  let fixture: ComponentFixture<MilkHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkHistoryComponent]
    });
    fixture = TestBed.createComponent(MilkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
