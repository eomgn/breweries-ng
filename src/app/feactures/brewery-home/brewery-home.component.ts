import { PrimeNGConfig } from 'primeng/api';
import { iBrewerys } from './interface/brewery';
import { BreweriesService } from './services/breweries.service';
import { Component, OnInit } from '@angular/core';
import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-brewery-home',
  templateUrl: './brewery-home.component.html',
  styleUrls: ['./brewery-home.component.scss'],
})
export class BreweryHomeComponent implements OnInit {
  brewries!: iBrewerys;

  currentPage: number = 1;

  paymentOptions!: any[];

  loading!: boolean;

  types!: any[];
  selectedType!: string;
  filterValue = '';

  constructor(
    private breweriesService: BreweriesService,
    private primeNGConfig: PrimeNGConfig
  ) {
    // paginator from primeng
    this.paymentOptions = [
      { name: '1', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 3 },
    ];

    // selected from primeng
    this.types = [
      { name: 'micro' },
      { name: 'nano' },
      { name: 'regional' },
      { name: 'brewpub' },
      { name: 'large' },
      { name: 'planning' },
      { name: 'bar' },
      { name: 'contract' },
      { name: 'proprietor' },
      { name: 'closed' },
    ];
  }

  ngOnInit(): void {
    // primeng

    this.getBreweriesList();

    this.primeNGConfig.ripple = true;
  }

  getBreweriesList() {
    this.breweriesService
      .getBreweries(this.currentPage, this.selectedType)
      .subscribe((result) => {
        this.brewries = result;
      });
  }

  myResetFunction(options: DropdownFilterOptions) {
    options.reset;
    this.selectedType = '';
  }
}
