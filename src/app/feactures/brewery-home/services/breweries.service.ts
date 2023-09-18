import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/service/http-base.service';
import { iBrewery } from '../interface/brewery';

@Injectable({
  providedIn: 'root',
})
export class BreweriesService extends HttpBaseService {
  constructor(override injector: Injector) {
    super(injector);
  }

  getBreweries(currentPage: any): Observable<iBrewery[]> {
    let endpoint: string = `?page=${currentPage}&per_page=16`;

    return this.httpGet(endpoint);
  }
}
