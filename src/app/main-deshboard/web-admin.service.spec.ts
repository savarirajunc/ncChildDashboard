import { TestBed, inject } from '@angular/core/testing';

import { WebAdminService } from './web-admin.service';

describe('WebAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebAdminService]
    });
  });

  it('should be created', inject([WebAdminService], (service: WebAdminService) => {
    expect(service).toBeTruthy();
  }));
});
