import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { FightDto } from './fight-dto';

@Injectable({
  providedIn: 'root',
})
export class FightsApi {
  #http = inject(HttpClient);

  public fight(characterOneId: string, characterTwoId: string): Observable<FightDto> {
    return this.#http.post<FightDto>(`${environment.apiUrl}/fights`, {
      characterOne: characterOneId,
      characterTwo: characterTwoId,
    });
  }

  public getAll(): Observable<FightDto[]> {
    return this.#http.get<FightDto[]>(`${environment.apiUrl}/fights`);
  }
}
