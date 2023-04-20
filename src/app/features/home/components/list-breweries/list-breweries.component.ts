import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';

import { BreweriesList } from '../../interfaces/breweries.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list-breweries',
  templateUrl: './list-breweries.component.html',
  styleUrls: ['./list-breweries.component.scss']
})
export class ListBreweriesComponent implements OnInit {
  
  listBreweries!: Observable<BreweriesList[]> 
   
  currentPage: number = 1

  constructor(
    private apiService: ApiService,
    ) {}


  ngOnInit(): void {
    this.getData(this.currentPage)
  }


  getData(page: number){
    this.currentPage = page
    this.listBreweries = this.apiService.getData(page)
  }


}
