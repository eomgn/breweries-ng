import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ListBreweriesComponent } from './components/list-breweries/list-breweries.component';


// angular material
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


// directive
import { BreweriesTypeDirective } from 'src/app/shared/directives/breweries-type.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ListBreweriesComponent,
    BreweriesTypeDirective,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    ListBreweriesComponent
  ]
})
export class HomeModule { }
