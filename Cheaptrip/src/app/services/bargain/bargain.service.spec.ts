import { TestBed } from '@angular/core/testing';

import { BargainService } from './bargain.service';

describe('BargainService', () => {
  let service: BargainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BargainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
