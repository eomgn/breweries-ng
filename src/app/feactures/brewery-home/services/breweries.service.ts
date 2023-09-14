import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/service/http-base.service';
import { iBrewery } from '../interface/brewery';

@Injectable({
  providedIn: 'root',
})
export class BreweriesService extends HttpBaseService {
  endpoint: string = '';

  constructor(override injector: Injector) {
    super(injector);
  }

  getBreweries(): Observable<iBrewery[]> {
    return this.httpGet(this.endpoint);
  }
}
