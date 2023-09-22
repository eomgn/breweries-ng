import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryHomeComponent } from './brewery-home.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', component: BreweryHomeComponent },
  { path: 'details/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreweryHomeRoutingModule {}
