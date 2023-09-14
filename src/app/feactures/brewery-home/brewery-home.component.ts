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

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit(): void {
    this.getBreweriesList();
  }

  getBreweriesList() {
    this.breweriesService.getBreweries().subscribe((result) => {
      this.brewries = result;
    });
  }
}
