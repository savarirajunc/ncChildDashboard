import { TestBed, inject } from '@angular/core/testing';

import { ParentquestService } from './parentquest.service';

describe('ParentquestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentquestService]
    });
  });

  it('should be created', inject([ParentquestService], (service: ParentquestService) => {
    expect(service).toBeTruthy();
  }));
});
