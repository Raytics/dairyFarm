import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthManagementComponent } from './health-management.component';

describe('HealthManagementComponent', () => {
  let component: HealthManagementComponent;
  let fixture: ComponentFixture<HealthManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthManagementComponent]
    });
    fixture = TestBed.createComponent(HealthManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
