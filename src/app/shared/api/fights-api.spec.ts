import { TestBed } from '@angular/core/testing';

import { FightsApi } from './fights-api';

describe('FightsApi', () => {
  let service: FightsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
