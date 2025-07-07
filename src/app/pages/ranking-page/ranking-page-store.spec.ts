import { TestBed } from '@angular/core/testing';

import { RankingPageStore } from './ranking-page-store';

describe('RankingPageStore', () => {
  let service: RankingPageStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingPageStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
