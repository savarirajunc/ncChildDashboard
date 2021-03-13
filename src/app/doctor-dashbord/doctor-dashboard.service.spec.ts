import { TestBed, inject } from '@angular/core/testing';

import { DoctorDashboardService } from './doctor-dashboard.service';

describe('DoctorDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorDashboardService]
    });
  });

  it('should be created', inject([DoctorDashboardService], (service: DoctorDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
