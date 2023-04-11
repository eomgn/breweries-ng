import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
