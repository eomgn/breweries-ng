import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryHomeComponent } from './brewery-home.component';

const routes: Routes = [{ path: '', component: BreweryHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreweryHomeRoutingModule {}
