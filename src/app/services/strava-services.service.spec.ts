import { TestBed } from '@angular/core/testing';

import { StravaServicesService } from './strava-services.service';

describe('StravaServicesService', () => {
  let service: StravaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StravaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
