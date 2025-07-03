import { TestBed } from '@angular/core/testing';

import { ArenaStore } from './arena-store';

describe('ArenaStore', () => {
  let service: ArenaStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
