import { TestBed, inject } from '@angular/core/testing';

import { BlogproduserService } from './blogproduser.service';

describe('BlogproduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogproduserService]
    });
  });

  it('should be created', inject([BlogproduserService], (service: BlogproduserService) => {
    expect(service).toBeTruthy();
  }));
});
