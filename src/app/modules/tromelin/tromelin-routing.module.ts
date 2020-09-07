import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TromelinComponent } from './pages/tromelin/tromelin.component';

const routes: Routes = [
  { path: 'tromelin', component: TromelinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TromelinRoutingModule { 
  
}
