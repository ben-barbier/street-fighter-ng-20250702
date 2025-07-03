import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { concatAll, filter, forkJoin, mergeMap, Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Character } from '../../../pages/characters-page/character';
import { CountriesApi } from '../countries/countries-api';
import { CharacterDto } from './character-dto';
import { CreateCharacterDto } from './create-character-dto';
import { UpdateCharacterDto } from './update-character-dto';

@Injectable({ providedIn: 'root' })
export class CharactersApi {
  #http = inject(HttpClient);
  #countriesApi = inject(CountriesApi);

  public getAll(): Observable<CharacterDto[]> {
    return this.#http.get<CharacterDto[]>(`${environment.apiUrl}/characters`).pipe(
      concatAll(),
      filter(character => character.stun >= 1000),
      map(character => ({ ...character, stamina: character.stamina + 50 })),
      toArray()
    );
  }

  public getAllWithCountryDetails(): Observable<Character[]> {
    return this.getAll().pipe(
      concatAll(),
      mergeMap(character =>
        this.#countriesApi.get(character.country).pipe(map(country => ({ ...character, countryDetails: country })))
      ),
      toArray()
    );
  }

  public getAllWithCountryDetails2(): Observable<Character[]> {
    return forkJoin([this.#countriesApi.getAll(), this.getAll()]).pipe(
      map(([countries, characters]) => {
        return characters.map(character => ({
          ...character,
          countryDetails: countries.find(country => country.name === character.country)!,
        }));
      })
    );
  }

  public get(id: string): Observable<CharacterDto> {
    return this.#http.get<CharacterDto>(`${environment.apiUrl}/characters/${id}`);
  }

  public add(character: CreateCharacterDto): Observable<CharacterDto> {
    return this.#http.post<CharacterDto>(`${environment.apiUrl}/characters`, character);
  }

  public remove(id: string): Observable<void> {
    return this.#http.delete<void>(`${environment.apiUrl}/characters/${id}`);
  }

  public update(character: UpdateCharacterDto): Observable<CharacterDto> {
    return this.#http.patch<CharacterDto>(`${environment.apiUrl}/characters/${character.id}`, character);
  }
}
