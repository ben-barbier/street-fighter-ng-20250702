import { TestBed } from '@angular/core/testing';

import { CharactersApi } from './characters-api';

describe('CharactersApi', () => {
  let service: CharactersApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
