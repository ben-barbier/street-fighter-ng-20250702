import { Component, ChangeDetectionStrategy, computed, inject, input } from '@angular/core';
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
import { CharactersService } from '../../../shared/services/characters-service';
import { MatMiniFabButton } from '@angular/material/button';
import { CharacterDto } from '../../../shared/services/character-dto';
import { ArenaStore } from '../../../shared/stores/arena-store';

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
  readonly #charactersService = inject(CharactersService);
  readonly #arenaStore = inject(ArenaStore);
  readonly character = input.required<CharacterDto>();

  protected pictureUrl = computed(() => this.#charactersService.getPictureUrl(this.character()));
  protected isInArena = computed(() => this.#arenaStore.isInArena(this.character()));

  public toggleToArena(): void {
    this.#arenaStore.toggleToArena(this.character());
  }
}
