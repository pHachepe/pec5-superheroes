import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PagedResponse, Superhero } from '../models/superhero.model';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  http = inject(HttpClient);

  private apiUrl = environment.apiUrl + '/superheroes';

  constructor() {}

  getSuperheroes(
    filter: string = '',
    page: number = 1,
    limit: number = 12,
  ): Observable<PagedResponse<Superhero>> {
    let params = new HttpParams()
      .set('name_like', filter)
      .set('_page', String(page))
      .set('_limit', String(limit));

    return this.http
      .get<Superhero[]>(this.apiUrl, { observe: 'response', params })
      .pipe(
        map((response: HttpResponse<Superhero[]>) => {
          return {
            data: response.body as Superhero[],
            total: parseInt(response.headers.get('X-Total-Count') || '0'),
          };
        }),
      );
  }

  getSuperhero(id: number): Observable<Superhero> {
    return this.http.get<Superhero>(`${this.apiUrl}/${id}`);
  }
}
