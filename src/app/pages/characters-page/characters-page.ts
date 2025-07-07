import { Component, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CharacterDto } from '../../shared/api/characters/character-dto';
import { CharactersApi } from '../../shared/api/characters/characters-api';
import { ArenaStore } from '../../shared/store/arena-store';
import { CharacterCard } from './character-card/character-card';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterCard],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss',
})
export default class CharactersPage implements OnInit {
  #charactersApi = inject(CharactersApi);
  #arenaStore = inject(ArenaStore);

  protected characters = signal<CharacterDto[]>([]);

  constructor() {
    //🚨🚨🚨 LEAK en dessous
    this.#arenaStore.leak$.pipe(takeUntilDestroyed()).subscribe(leak => {
      console.log(leak);
    });
  }

  ngOnInit(): void {
    this.#charactersApi.getAll().subscribe((characters: CharacterDto[]) => {
      this.characters.set(characters);
    });
  }
}
