import { TestBed } from '@angular/core/testing';

import { BargainsAccountsService } from './bargains-accounts.service';

describe('BargainsAccountsService', () => {
  let service: BargainsAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BargainsAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
