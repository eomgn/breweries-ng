import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';

import { BreweriesList } from '../interfaces/breweries.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-breweries',
  templateUrl: './list-breweries.component.html',
  styleUrls: ['./list-breweries.component.scss']
})
export class ListBreweriesComponent implements OnInit {

  listBreweries!: Observable<BreweriesList[]>


  constructor(
    private apiService: ApiService
  ) {}


  ngOnInit(): void {
    // this.apiService.getData()
    //   .subscribe(data => {
    //     this.listBreweries =  data
    //   })

    this.listBreweries = this.apiService.getData();
  }
}
