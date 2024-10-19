import { TestBed } from '@angular/core/testing';

import { InscreptionService } from './inscreption.service';

describe('InscreptionService', () => {
  let service: InscreptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscreptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
