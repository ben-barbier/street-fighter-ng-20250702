import { Injectable, signal } from '@angular/core';

import { CharacterDto } from '../api/characters/character-dto';

@Injectable({ providedIn: 'root' })
export class ArenaStore {
  readonly #arenaCharacters = signal<(CharacterDto | null)[]>([]);
  readonly arenaCharacters = this.#arenaCharacters.asReadonly();

  addCharacter(character: CharacterDto): void {
    const arena = this.#arenaCharacters();

    if (arena.length >= 2) {
      return;
    }

    this.#arenaCharacters.set([...arena, character]);
  }
}
