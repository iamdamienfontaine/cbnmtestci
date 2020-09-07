import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';


import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared.module';
import { MapModule } from '../map/map.module';


import { TromelinRoutingModule } from './tromelin-routing.module';
import { TromelinService } from './services/tromelin.service';

import { tromelinReducer } from './tromelin.reducer';

import  { TromelinComponent } from './pages/tromelin/tromelin.component';
import  { TromelinExplainComponent } from './components/tromelin/tromelin-explain/tromelin-explain.component';
import  { TaxonsListComponent } from './components/taxons/taxons-list/taxons-list.component';
import  { TaxonInfosComponent } from './components/taxon/taxon-infos/taxon-infos.component';
import  { TaxonActionsComponent } from './components/taxon/taxon-actions/taxon-actions.component';
import  { TaxonActionComponent } from './components/taxon/taxon-action/taxon-action.component';


@NgModule({
  declarations: [
    TromelinComponent, TromelinExplainComponent,  TaxonsListComponent, TaxonInfosComponent, TaxonActionsComponent, TaxonActionComponent
  ],

  imports: [
    CommonModule,
    TromelinRoutingModule,
    MaterialModule, SharedModule, MapModule,

    StoreModule.forFeature( 'tromelinState',  tromelinReducer ),
  ],

  exports: [TromelinRoutingModule],

  providers: [ TromelinService ],

  entryComponents: [TromelinExplainComponent, TaxonInfosComponent]
})
export class TromelinModule { }
