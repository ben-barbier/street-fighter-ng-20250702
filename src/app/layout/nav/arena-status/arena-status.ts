import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { ArenaStore } from '../../../shared/store/arena-store';

@Component({
  selector: 'app-arena-status',
  imports: [MatIcon, RouterLink],
  templateUrl: './arena-status.html',
  styleUrl: './arena-status.scss',
})
export class ArenaStatus {
  #arenaStore = inject(ArenaStore);

  arenaCharacters = this.#arenaStore.arenaCharacters;

  incrementLeak() {
    this.#arenaStore.leak$.next(this.#arenaStore.leak$.getValue() + 1);
  }
}
