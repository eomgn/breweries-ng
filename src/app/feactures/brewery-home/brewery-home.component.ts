import { PrimeNGConfig } from 'primeng/api';
import { iBrewerys } from './interface/brewery';
import { BreweriesService } from './services/breweries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewery-home',
  templateUrl: './brewery-home.component.html',
  styleUrls: ['./brewery-home.component.scss'],
})
export class BreweryHomeComponent implements OnInit {
  brewries!: iBrewerys;

  currentPage: number = 1;

  paymentOptions!: any[];

  constructor(
    private breweriesService: BreweriesService,
    private primeNGConfig: PrimeNGConfig
  ) {
    // paginator to primeng
    this.paymentOptions = [
      { name: '1', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 3 },
    ];
  }

  ngOnInit(): void {
    this.getBreweriesList();
    this.primeNGConfig.ripple = true;
  }

  getBreweriesList() {
    this.breweriesService.getBreweries(this.currentPage).subscribe((result) => {
      this.brewries = result;
    });
  }
}
