import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BreweriesList } from 'src/app/features/home/components/interfaces/breweries.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly urlBase: string = 'https://api.openbrewerydb.org/v1/breweries'

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<BreweriesList[]> {
    return this.http.get<BreweriesList[]>(this.urlBase)
    .pipe(
      tap()
    )
  }
}
