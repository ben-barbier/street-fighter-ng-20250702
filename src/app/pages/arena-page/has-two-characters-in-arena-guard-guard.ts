import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { ArenaStore } from '../../shared/store/arena-store';

export const hasTwoCharactersInArenaGuardGuard: CanActivateFn = () => {
  const store = inject(ArenaStore);
  const arenaFull = store.arenaCharacters().length >= 2;

  if (!arenaFull) {
    alert(`Impossible d'accéder à l'arène sis il n'y a pas 2 combatants !`);
    return false;
  }

  return true;
};
