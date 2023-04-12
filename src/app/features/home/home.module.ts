import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ListBreweriesComponent } from './components/list-breweries/list-breweries.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListBreweriesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    ListBreweriesComponent
  ]
})
export class HomeModule { }
