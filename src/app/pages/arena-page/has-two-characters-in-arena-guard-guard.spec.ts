import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasTwoCharactersInArenaGuardGuard } from './has-two-characters-in-arena-guard-guard';

describe('hasTwoCharactersInArenaGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => hasTwoCharactersInArenaGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
