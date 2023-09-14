import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ToolbarModule, ButtonModule],
  exports: [ToolbarModule, ButtonModule],
})
export class PrimengModule {}
