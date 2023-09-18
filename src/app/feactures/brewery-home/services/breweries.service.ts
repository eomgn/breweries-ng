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

  getBreweries(currentPage: number, type?: string): Observable<iBrewery[]> {
    if (type == null) {
      let endpoint: string = `?page=${currentPage}&per_page=25`;

      return this.httpGet(endpoint);
    } else {
      let endpoint: string = `?page=${currentPage}&per_page=25&by_type=${type}`;

      return this.httpGet(endpoint);
    }
  }
}
