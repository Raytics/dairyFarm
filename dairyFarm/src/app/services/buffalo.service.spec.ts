import { TestBed } from '@angular/core/testing';

import { BuffaloService } from './buffalo.service';

describe('BuffaloService', () => {
  let service: BuffaloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuffaloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
