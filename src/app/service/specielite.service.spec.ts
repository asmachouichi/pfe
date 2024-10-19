import { TestBed } from '@angular/core/testing';

import { SpecieliteService } from './specielite.service';

describe('SpecieliteService', () => {
  let service: SpecieliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecieliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
