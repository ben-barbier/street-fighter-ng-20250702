import { Component, inject, OnInit, signal } from '@angular/core';

import { CharacterDto } from '../../shared/api/characters/character.dto';
import { CharactersApi } from '../../shared/api/characters/characters-api';
import { CharacterCard } from './character-card/character-card';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterCard],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.scss',
})
export class CharactersPage implements OnInit {
  #charactersApi = inject(CharactersApi);

  protected characters = signal<CharacterDto[]>([]);

  ngOnInit(): void {
    this.#charactersApi.getAll().subscribe((characters: CharacterDto[]) => {
      this.characters.set(characters);
    });
  }
}
