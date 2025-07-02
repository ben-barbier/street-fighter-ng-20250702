import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CharacterDto } from './character.dto';

@Injectable({ providedIn: 'root' })
export class CharactersApi {
  #http = inject(HttpClient);

  public getAll(): Observable<CharacterDto[]> {
    return this.#http.get<CharacterDto[]>(`${environment.apiUrl}/characters`);
  }

  public get(id: string): Observable<CharacterDto> {
    return this.#http.get<CharacterDto>(
      `${environment.apiUrl}/characters/${id}`,
    );
  }
}
