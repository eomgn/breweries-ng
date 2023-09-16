import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// routing
import { BreweryHomeRoutingModule } from './brewery-home-routing.module';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { BreweryHomeComponent } from '../brewery-home/brewery-home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [BreweryHomeComponent, CardComponent],
  imports: [CommonModule, BreweryHomeRoutingModule, SharedModule, FormsModule],
})
export class BreweryHomeModule {}
