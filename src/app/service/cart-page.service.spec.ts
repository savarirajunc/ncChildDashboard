import { TestBed, inject } from '@angular/core/testing';

import { CartPageService } from './cart-page.service';

describe('CartPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartPageService]
    });
  });

  it('should be created', inject([CartPageService], (service: CartPageService) => {
    expect(service).toBeTruthy();
  }));
});
