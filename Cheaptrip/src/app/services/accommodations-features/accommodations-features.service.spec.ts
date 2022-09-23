import { TestBed } from '@angular/core/testing';

import { AccommodationsFeaturesService } from './accommodations-features.service';

describe('AccommodationsFeaturesService', () => {
  let service: AccommodationsFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccommodationsFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
