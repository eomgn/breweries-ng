import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryHomeRoutingModule } from './brewery-home-routing.module';
import { BreweryHomeComponent } from '../brewery-home/brewery-home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [BreweryHomeComponent, CardComponent],
  imports: [CommonModule, BreweryHomeRoutingModule],
})
export class BreweryHomeModule {}
