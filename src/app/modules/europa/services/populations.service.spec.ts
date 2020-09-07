import { TestBed, inject } from '@angular/core/testing';

import { PopulationsService } from './populations.service';

describe('PopulationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationsService]
    });
  });

  it('should be created', inject([PopulationsService], (service: PopulationsService) => {
    expect(service).toBeTruthy();
  }));
});
