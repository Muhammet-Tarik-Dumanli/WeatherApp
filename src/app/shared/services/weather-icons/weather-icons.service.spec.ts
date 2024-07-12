import { TestBed } from '@angular/core/testing';

import { WeatherIconsService } from './weather-icons.service';

describe('WeatherIconsService', () => {
  let service: WeatherIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
