import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuffaloComponent } from './add-buffalo.component';

describe('AddBuffaloComponent', () => {
  let component: AddBuffaloComponent;
  let fixture: ComponentFixture<AddBuffaloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBuffaloComponent]
    });
    fixture = TestBed.createComponent(AddBuffaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
