import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  nameCard!: string;

  @Input()
  streetCard!: string;

  @Input()
  cityCard!: string;

  @Input()
  stateCard!: string;

  @Input()
  postalCodeCard!: string;

  @Input()
  countryCard!: string;

  @Input()
  typeCard!: string;

  constructor() {}

  ngOnInit(): void {}
}
