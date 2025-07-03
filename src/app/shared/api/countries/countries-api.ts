import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CountryDto } from './country-dto';

@Injectable({
  providedIn: 'root',
})
export class CountriesApi {
  #http = inject(HttpClient);

  public getAll(): Observable<CountryDto[]> {
    return this.#http.get<CountryDto[]>(`${environment.apiUrl}/countries`);
  }

  public get(id: string): Observable<CountryDto> {
    return this.#http.get<CountryDto>(`${environment.apiUrl}/countries/${id}`);
  }
}
