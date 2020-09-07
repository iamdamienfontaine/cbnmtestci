import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import CircleStyle from 'ol/style/Circle'
import Text from 'ol/style/Text';


import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';

import { MapLayer } from '../../map/mapLayer';
import { MapService } from '../../map/map.service';


@Injectable({
  providedIn: 'root'
})
export class PopulationsSigService extends MapLayer{

  features: any;

  features_displayed: any;



  constructor(
    private appSvc: AppService,
    private mapSvc: MapService,
    private http: HttpClient 
  ) { 
    super(mapSvc); 

    this.features = {
      type: "FeatureCollection",
      features: []
    };

    this.features_displayed = {
      type: "FeatureCollection",
      features: []
    }

  }



  bootstrap(): void {
    this.getLayer();
  }

  removeLayer = () => {
    this.mapSvc.removeLayer('populations');
  }

  getLayer() {

      var layer = this.mapSvc.getVectorLayer('populations');

      if ( layer === undefined || layer === null )
      {
          layer = new VectorLayer({
              title: 'populationsLayer',
              source:  new VectorSource({projection: 'EPSG:2975'})
          });

          layer.setStyle( this.setlayerStyle );

          this.mapSvc.addLayer('populations', layer);
      }
      return layer;
  }



  setlayerStyle:any = (feature, resolution) => {
      
    let fillColor, 
          strokeColor,
          opacity, 
          textFill;

    switch( parseInt(feature.get('pop_typologie')) ) {                    
      case 1:
        opacity = 1;
        break;
      case 2:
        opacity = 0.5;
        break;
      case 3:
      case 4:
        opacity = 0;
        break;                    
    }  
    
    if ( feature.get('pop_prior') === true ) {
      
      return [
        new Style({
          image: new Icon({
            anchor: [0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2979FF" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
          })
        })
      ];
    }


    if ( feature.get('pop_taxon_id') == 1 ) {

      fillColor='rgba(255, 255, 0, '+ opacity +')';
      strokeColor='rgba(255, 255, 0, 1)';
      textFill="#000";

      
    }
    else if (feature.get('pop_taxon_id') == 2) {
      fillColor='rgba(198,255,0, '+ opacity +')';
      strokeColor='rgba(198,255,0, 1)';
      textFill="#FF0000"
    }
    else if (feature.get('pop_taxon_id') == 3) {
      fillColor='rgba(255,165,0 , '+ opacity +')';
      strokeColor='rgba(255,165,0, 1)';
      textFill="#000000"
    }
    else {
      fillColor='rgba(255, 255, 255, '+ opacity +')';
      strokeColor='rgba(255, 255, 255, 1)';
      textFill="#000";
    }
    

    return [
      new Style({
        fill: new Fill({
            color: fillColor
        }),
        stroke: new Stroke({
            color: strokeColor,
            width: 2
        }),
        text: new Text({
          font: '16px helvetica,sans-serif',
          text: ""+ feature.get('pop_id'),
          fill: new Fill({
              color: textFill
          }),
          stroke: new Stroke({
              color: '#fff',
              width: 2
          })
          , overflow: true
          ,zindex: 9999
        }),
        image: new CircleStyle({
            radius: 10,
            // fill: new Fill({
            //     color: 'orange'
            // }),
            stroke: new Stroke({
                color: 'orange',
                width: 2
            })
        }),
                       
      })
    ];
  }


  
  addSelectInteraction( funct ) {
    this.addSelectInteraction_( 'selectPopulation', funct );
  }



  getFeatures( filters: any )  {
      let params = new HttpParams();
      for( let key in filters) {
        params = params.append( key, filters[key] );
      };
      
      return this.http.post<any[]>(environment.api + 'api/populations/getFeatures', params )
        .pipe(
          catchError( this.appSvc.handleError('getFeatures', []) ),
          tap( (data: any) => {
            this.features = data.features;
          })
        );

  }



  /**
   * 
   * @param population_id 
   */
  highlightFeature( population_id: number ) {

    const features = this.getLayer().getSource().getFeatures();

    features.forEach( ( item:any , key: any ) => {
    
      if ( item.get('population_id') == population_id ) {       

        // this.interactions.get('selectPopulation').interaction.getFeatures().clear();
        // this.interactions.get('selectPopulation').interaction.getFeatures().push(item);

        item.setStyle( this.setHighlightStyle );

        var extent: any = item.getGeometry().getExtent();
        
        if ( extent[0] !== Infinity) {
          this.mapSvc.getMap().getView().fit(extent, this.mapSvc.getMap().getSize());
        }
          
      }
      else {
        item.setStyle( this.setlayerStyle );    
      }
    });

  }
  


  setHighlightStyle: any = (feature, resolution) => {
      
    let fillColor, 
          strokeColor,
          opacity, 
          textFill;    

    return [
      new Style({
        fill: new Fill({
            color: 'rgba(79,195,247, 0.75)'
        }),
        stroke: new Stroke({
            color: 'rgb(179,229,252)',
            width: 2
        }),
        image: new CircleStyle({
            radius: 10,
            fill: new Fill({
              color: 'rgba(79,195,247, 0.75)'
            }),
            stroke: new Stroke({
              color: 'rgb(179,229,252)',
                width: 1
            })
        }),
//                        text: createTextStyle(feature, resolution)
      })
    ];
  }




  filterFeatureByTaxon( taxon_id: number ) {


    this.features_displayed.features.forEach(
      ( feature ) => {
        this.features.features.push(feature);
      }
    );
    this.features_displayed.features = [];


    this.features_displayed.features = this.features.features.filter(feature => feature.properties.pop_taxon_id == taxon_id )  ;
    this.features.features = this.features.features.filter(feature => feature.properties.pop_taxon_id != taxon_id);

    this.mapSvc.populateGeoJSONFeatures('populations', this.features_displayed);
  }


  addPopPrioritaire(populations_prioritaire:any[]) {
    
    let features: any = [];

    for ( let element in populations_prioritaire ) {
      let geometry = JSON.parse( populations_prioritaire[element].geojson_prior);
      

      let feature = {
        type: "Feature",
        geometry: geometry,
        properties: {
          pop_taxon_id: populations_prioritaire[element].taxon_id,
          pop_prior: true
        }
      }
      
      this.features.features.push(feature);

      

      // let feature = this.mapSvc.createFeatureFromGeoJSON(populations_prioritaire[element].geojson_prior);
      // feature.set('pop_taxon_id', populations_prioritaire[element].taxon_id );
      // feature.set('pop_prior', 1);
      
      // features.push(feature);
    }

    // this.mapSvc.addFeatures( 'populations', features );

  }


}
