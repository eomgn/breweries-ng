import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { FieldsetModule } from 'primeng/fieldset';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    SelectButtonModule,
    DropdownModule,
    ProgressBarModule,
    FieldsetModule,
    TimelineModule,
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    SelectButtonModule,
    DropdownModule,
    ProgressBarModule,
    FieldsetModule,
    TimelineModule,
  ],
})
export class PrimengModule {}
