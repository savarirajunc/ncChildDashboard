import { TestBed, inject } from '@angular/core/testing';

import { MainWebsiteService } from './main-website.service';

describe('MainWebsiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainWebsiteService]
    });
  });

  it('should be created', inject([MainWebsiteService], (service: MainWebsiteService) => {
    expect(service).toBeTruthy();
  }));
});
