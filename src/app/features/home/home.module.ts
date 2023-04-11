import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
