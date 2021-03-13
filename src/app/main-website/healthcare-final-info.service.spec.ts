import { TestBed, inject } from '@angular/core/testing';

import { HealthcareFinalInfoService } from './healthcare-final-info.service';

describe('HealthcareFinalInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthcareFinalInfoService]
    });
  });

  it('should be created', inject([HealthcareFinalInfoService], (service: HealthcareFinalInfoService) => {
    expect(service).toBeTruthy();
  }));
});
