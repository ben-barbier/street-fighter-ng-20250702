import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatMiniFabButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { CharacterDto } from '../../../shared/api/characters/character-dto';
import { ArenaStore } from '../../../shared/store/arena-store';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.html',
  styleUrls: ['./character-card.scss'],
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    RouterLinkWithHref,
    MatMiniFabButton,
    MatCardImage,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardAvatar,
    MatCardTitle,
    MatCardSubtitle,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCard {
  readonly character = input.required<CharacterDto>();

  #arenaStore = inject(ArenaStore);

  protected pictureUrl = computed(() => `${environment.apiUrl}/assets/characters/${this.character().id}_thumbnail.png`);

  public toggleToArena(): void {
    this.#arenaStore.addCharacter(this.character());
  }

  public isInArena() {
    // TODO
  }
}
