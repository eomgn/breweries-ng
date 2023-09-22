import { Component, OnInit } from '@angular/core';
import { BreweriesService } from '../../services/breweries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { iBrewery } from '../../interface/brewery';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  brewerie!: iBrewery;

  constructor(
    private breweriesService: BreweriesService,
    private activedRout: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBreweriById();
  }

  getBreweriById() {
    const id = this.activedRout.snapshot.paramMap.get('id') as string;

    this.breweriesService.getBrewerieById(id).subscribe((result) => {
      this.brewerie = result;
      // console.log(result);
    });
  }

  backToCards() {
    return this.router.navigate(['/']);
  }
}
