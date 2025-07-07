import { Component, computed, inject, signal, untracked } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { exhaustMap, Subject } from 'rxjs';

import { CreateFightDto } from '../../shared/api/fights/create-fight-dto';
import { FightsApi } from '../../shared/api/fights/fights-api';
import { ArenaStore } from '../../shared/store/arena-store';

@Component({
  selector: 'app-arena-page',
  imports: [MatIcon, MatIconButton],
  templateUrl: './arena-page.html',
  styleUrl: './arena-page.scss',
})
export default class ArenaPage {
  arena = inject(ArenaStore);
  fightApi = inject(FightsApi);
  characters = this.arena.arenaCharacters;
  winnerId = signal('');
  winner = computed(() => untracked(this.characters).find(c => c?.id === this.winnerId()) ?? null);

  startFight$ = new Subject<CreateFightDto>();

  fight() {
    this.startFight$.next({
      characterOneId: this.characters()[0]!.id,
      characterTwoId: this.characters()[1]!.id,
    });
  }

  constructor() {
    this.startFight$
      .pipe(exhaustMap(fight => this.fightApi.fight(fight.characterOneId, fight.characterTwoId)))
      .subscribe(result => this.winnerId.set(result.winnerId));
  }
}
