import { TestBed } from '@angular/core/testing';

import { NationnaliteService } from './nationnalite.service';

describe('NationnaliteService', () => {
  let service: NationnaliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationnaliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
