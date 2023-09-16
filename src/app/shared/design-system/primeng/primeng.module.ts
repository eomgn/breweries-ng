import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    SelectButtonModule,
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    SelectButtonModule,
  ],
})
export class PrimengModule {}
