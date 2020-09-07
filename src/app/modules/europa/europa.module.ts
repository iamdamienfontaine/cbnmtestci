import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared.module';
import { MapModule } from '../map/map.module';

import { EuropaRoutingModule } from './europa-routing.module';
import { EuropaComponent } from './pages/europa/europa.component';


import { PopulationsListComponent } from './components/populations/populations-list/populations-list.component';
import { PopulationDialogComponent } from './components/population/population-dialog/population-dialog.component';
import { PopulationLutteComponent } from './components/population/population-lutte/population-lutte.component';
import { PopulationSuiviComponent } from './components/population/population-suivi/population-suivi.component';
import { PopulationSuiviFataqueComponent } from './components/population/population-suivi-fataque/population-suivi-fataque.component';
import { PopulationActionDirective } from './components/population/population-dialog/population-action.directive';
import { PopulationBilanComponent } from './components/population/population-bilan/population-bilan.component';
import { BilanChocaComponent } from './components/bilan/bilan-choca/bilan-choca.component';
import { BilanSisalComponent } from './components/bilan/bilan-sisal/bilan-sisal.component';
import { BilanFataqueComponent } from './components/bilan/bilan-fataque/bilan-fataque.component';
import { BilanComponent } from './components/bilan/bilan.component';
import { EuropaExplainComponent } from './components/europa-explain/europa-explain.component';



@NgModule({

  declarations: [
    EuropaComponent,
    EuropaExplainComponent,
    PopulationsListComponent,
    PopulationDialogComponent,
    PopulationLutteComponent,
    PopulationSuiviComponent,
    PopulationActionDirective,
    PopulationBilanComponent,
    BilanComponent,
    BilanChocaComponent,
    BilanSisalComponent,
    BilanFataqueComponent,
    PopulationSuiviFataqueComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule, SharedModule, MapModule,
    
    EuropaRoutingModule,
  ],

  exports: [
    EuropaRoutingModule
  ],

  entryComponents: [EuropaExplainComponent, PopulationDialogComponent, BilanComponent, PopulationLutteComponent, PopulationSuiviComponent, PopulationSuiviFataqueComponent]
})

export class EuropaModule { }
