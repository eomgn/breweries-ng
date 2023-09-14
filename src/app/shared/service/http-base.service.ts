import { HttpClient } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  private readonly httpClient!: HttpClient;

  private readonly api: string = 'https://api.openbrewerydb.org/v1/breweries/';

  constructor(protected injector: Injector) {
    this.httpClient = injector.get(HttpClient);
  }

  protected httpGet(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.api}${endpoint}`);
  }
}
