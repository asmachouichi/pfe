import { TestBed } from '@angular/core/testing';

import { EnsiegnantService } from './ensiegnant.service';

describe('EnsiegnantService', () => {
  let service: EnsiegnantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnsiegnantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
