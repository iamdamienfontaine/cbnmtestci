import { Injectable } from '@angular/core';

import Collection from 'ol/Collection';

import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import CircleStyle from 'ol/style/Circle'


import { MapService } from '../../map/map.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { AppService } from '../../../app.service';


@Injectable({
  providedIn: 'root'
})
export class TromelinSigService {


  public features: Collection;


  constructor(
    private appSvc: AppService,
    private mapSvc: MapService,
    private http: HttpClient
  ) { 



  }



  /**
   * Crée ou renvoi la couche d'affichage des géométries
   */
  getLayer() {

      var layer = this.mapSvc.getVectorLayer('tromelin-taxon');

      if ( layer === undefined || layer === null )
      {
          layer = new VectorLayer({
              title: 'taxonsLayer',
              source:  new VectorSource({projection: 'EPSG:2975'})
          });

          layer.setStyle( this.setlayerStyle );

          this.mapSvc.addLayer('tromelin-taxon', layer);

      }

      return layer;
  }


  removeLayer = () => {
    this.mapSvc.removeLayer('tromelin-taxon');
  }

  /**
   * Renvoie les features pour un taxon donné
   * @param filters 
   */
  getFeatures( id: number )  {

      let params = new HttpParams();

      return this.http.get<any[]>(environment.api + 'api/tromelin/taxons/getFeatures/'+ id )
        .pipe(
          catchError( this.appSvc.handleError('Tromelin- taxons.getFeatures', []) ),
          tap( (data: any) => {
            this.features = data.features;

            this.mapSvc.populateGeoJSONFeatures('tromelin-taxon', this.features);
          })
        );

  }



  setlayerStyle: Style = (feature, resolution) => {
      
    let fillColor, 
        strokeColor,
        opacity: number = 0.5, 
        textFill;
    
    fillColor='rgba(153,2014, 0, '+ opacity +')';
    strokeColor='rgba(255, 255, 0, 1)';
    textFill="#000";

    return [new Style({
      fill: new Fill({
          color: fillColor
      }),
      stroke: new Stroke({
          color: strokeColor,
          width: 2
      }),
      
      image: new CircleStyle({
          radius: 10,
          fill: new Fill({
              color: fillColor
          }),
          stroke: new Stroke({
              color: fillColor,
              width: 2
          })
      }),
                     
    })];

    return [
      
    ];
  }


}
