import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
  ],
  exports: [ToolbarModule, ButtonModule, CardModule, PaginatorModule],
})
export class PrimengModule {}
