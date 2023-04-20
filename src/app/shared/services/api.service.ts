import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BreweriesList } from 'src/app/features/home/interfaces/breweries.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly urlBase: string = 'https://api.openbrewerydb.org/v1/breweries?'

  constructor(
    private http: HttpClient
  ) { }

  getData(page: number): Observable<BreweriesList[]> {
    
    const url = `${this.urlBase}page=${page}&per_page=20&sort=name:asc`

    return this.http.get<BreweriesList[]>(url)
    .pipe(
      tap()
    )
  }
}
