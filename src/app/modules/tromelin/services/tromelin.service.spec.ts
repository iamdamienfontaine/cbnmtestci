import { TestBed } from '@angular/core/testing';

import { TromelinService } from './tromelin.service';

describe('TromelinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TromelinService = TestBed.get(TromelinService);
    expect(service).toBeTruthy();
  });
});
