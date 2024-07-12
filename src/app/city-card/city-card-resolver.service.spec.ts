import { TestBed } from '@angular/core/testing';

import { CityCardResolverService } from './city-card-resolver.service';

describe('CityCardResolverService', () => {
  let service: CityCardResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityCardResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
