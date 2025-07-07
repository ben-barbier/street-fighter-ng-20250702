import { inject, Injectable, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { CharacterDto } from '../../shared/api/characters/character-dto';
import { CharactersApi } from '../../shared/api/characters/characters-api';
import { FightsApi } from '../../shared/api/fights/fights-api';

type CharacterWithScore = CharacterDto & { score: number };

@Injectable()
export class RankingPageStore {
  #fightsApi = inject(FightsApi);
  #charactersApi = inject(CharactersApi);

  #rank = signal<CharacterWithScore[]>([]);
  rank = this.#rank.asReadonly();

  public loadRanking(): void {
    forkJoin([this.#charactersApi.getAll(), this.#fightsApi.getAll()])
      .pipe(
        map(([characters, fights]) => {
          return characters.map((c): CharacterWithScore => {
            const characterFights = fights.filter(f => f.characterOneId === c.id || f.characterTwoId === c.id);
            const score = characterFights.reduce((acc, fight) => {
              if (fight.winnerId === c.id) {
                return acc + 10;
              } else {
                return acc + 1;
              }
            }, 0);
            return { ...c, score };
          });
        }),
        map((characters: CharacterWithScore[]) => {
          return [...characters].sort((c1, c2) => c2.score - c1.score);
        })
      )
      .subscribe(res => this.#rank.set(res));
  }
}
