import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// module imports
import { DesignSystemModule } from './design-system/design-system.module';

// directives
import { BreweryTypeDirective } from './directive/brewery-type.directive';

//service

@NgModule({
  declarations: [BreweryTypeDirective],
  imports: [CommonModule, DesignSystemModule],
  exports: [DesignSystemModule, BreweryTypeDirective],
})
export class SharedModule {}
