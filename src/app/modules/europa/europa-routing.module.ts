import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuropaComponent } from './pages/europa/europa.component';

const routes: Routes = [
  { path: 'europa', component: EuropaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropaRoutingModule { }
