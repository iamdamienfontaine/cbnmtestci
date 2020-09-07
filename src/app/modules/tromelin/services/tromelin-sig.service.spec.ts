import { TestBed } from '@angular/core/testing';

import { TromelinSigService } from './tromelin-sig.service';

describe('TromelinSigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TromelinSigService = TestBed.get(TromelinSigService);
    expect(service).toBeTruthy();
  });
});
