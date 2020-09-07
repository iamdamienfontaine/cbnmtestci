import { Component, OnInit, Inject, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { MapService, BaselayerItem } from './map.service'
import { AppService } from '../../app.service';

import { Observable, Subject } from 'rxjs';

import { MatSidenav } from '@angular/material/sidenav'

import * as fromAppReducer from '../../app.reducer';



export interface legendItem {

  libelle: string,
  disabled: boolean

}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  @Input() ileId: number;

  ui: any;

  showSidenav: boolean = false;
  // uiSubject$: Subject<any>;

  legendLayers = {};
  
  legendBaseLayers: legendItem[] = [
    { libelle: 'europa', disabled: false },
    { libelle: 'tromelin', disabled: false }
  ]

  activeZoom: number = 0;
  activeBaseLayer = "";


  constructor(
    private appSvc: AppService,
    private mapSvc: MapService, 
    private store: Store<fromAppReducer.AppState>
  ) {

  }
  

  
  /**
   * A l'initialisation du composant
   */
  ngOnInit() {
   
    // window.setTimeout(() => {
      // this.mapSvc.addLegendLayers();
      // this.addMoveEnd();
    // }, 500);

    // this.uiSubject$ = this.appSvc.getUiSubject();

  }


  ngAfterViewInit() {
    this.mapSvc.createMap(  this.ileId  );
    this.mapSvc.addBaseLayers();
  }

  /**
   * A la suppression du composant
   */
  ngOnDestroy() {
    // this.removeMoveEnd();
    this.mapSvc.destroyMap();
  }


  
  /**
   * Zoom à l'aide des boutons de la carte
   * 
   * @param type 
   */
  zoom(type) {
    switch( type )
    {
        case "in":
            this.mapSvc.getMap().getView().setZoom(this.mapSvc.getMap().getView().getZoom()+1);
            break;

        case "out":
        this.mapSvc.getMap().getView().setZoom(this.mapSvc.getMap().getView().getZoom()-1);
            break;
            
    }
  }

  // hideMap = () => {
    // this.mapSvc.toggleMap(false);
  // }

  
  
  /*
   * Display SIDENAV
   */ 
  sidenavToggle = (): void => {
    
    this.store.dispatch( new fromAppReducer.PopulateState( { sidenavOpened: true } ) );

  }



  sidenavEndToggle = (): void => {
    
    this.store.dispatch( new fromAppReducer.PopulateState( { sidenavendOpened: true }));
    
  };

}
