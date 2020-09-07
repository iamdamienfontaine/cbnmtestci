import { TestBed, inject } from '@angular/core/testing';

import { PopulationsSigService } from './populations-sig.service';

describe('PopulationsListSigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationsSigService]
    });
  });

  it('should be created', inject([PopulationsSigService], (service: PopulationsSigService) => {
    expect(service).toBeTruthy();
  }));
});
