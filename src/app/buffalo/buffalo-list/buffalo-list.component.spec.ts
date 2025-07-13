import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffaloListComponent } from './buffalo-list.component';

describe('BuffaloListComponent', () => {
  let component: BuffaloListComponent;
  let fixture: ComponentFixture<BuffaloListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuffaloListComponent]
    });
    fixture = TestBed.createComponent(BuffaloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
