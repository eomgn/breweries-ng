import { Component, OnInit } from '@angular/core';
import { BreweriesService } from '../../services/breweries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private breweriesService: BreweriesService,
    private activedRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activedRout.snapshot.paramMap.get('id') as string;

    this.breweriesService.getBrewerieById(id).subscribe((result) => {
      console.log(result);
    });
  }
}
