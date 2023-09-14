import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// module imports
import { DesignSystemModule } from './design-system/design-system.module';

//service

@NgModule({
  declarations: [],
  imports: [CommonModule, DesignSystemModule],
  exports: [DesignSystemModule],
})
export class SharedModule {}
