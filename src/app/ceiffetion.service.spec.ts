import { TestBed } from '@angular/core/testing';

import { CeiffetionService } from './ceiffetion.service';

describe('CeiffetionService', () => {
  let service: CeiffetionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeiffetionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
