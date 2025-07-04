import { JsonPipe } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { CharacterDto } from '../../shared/api/characters/character-dto';
import { CharactersApi } from '../../shared/api/characters/characters-api';

@Component({
  selector: 'app-character-page',
  imports: [JsonPipe, RouterLink, MatButton],
  templateUrl: './character-page.html',
  styleUrl: './character-page.scss',
})
export default class CharacterPage implements OnInit {
  route = inject(ActivatedRoute);
  charactersApi = inject(CharactersApi);
  id = input.required<string>();

  character = signal<CharacterDto | null>(null);

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.charactersApi.get(id))
      )
      .subscribe(character => {
        this.character.set(character);
      });
  }
}
