import { Injectable } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable, BehaviorSubject } from 'rxjs';

import ol from 'ol';
import { defaults as defaultControls, ScaleLine, Control} from 'ol/control';

import proj4 from 'proj4';
import { transform } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { register } from 'ol/proj/proj4';
import Map from 'ol/Map';
import View from 'ol/View';

import VectorSource from 'ol/source/Vector';
import TileWMS from 'ol/source/TileWMS';
import Layer from 'ol/layer/Layer';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { environment } from '../../../environments/environment';



export interface BaselayerItem {
  libelle: string,
  inRange: boolean,
  active: boolean,
  resolutions: Array<number>,
  layer?: ol.layer
}


export interface Layers {
  [key: string]: Layer;
}



@Injectable()
export class MapService {

  map: Map;
  proj: Projection;
  view: View;

  ile_id: number;

  sidenavRef: MatSidenav

  // private toggleMapSubject = new BehaviorSubject<any>(false);

  legendLayers = {};

  baselayers: BaselayerItem[] = [
    { libelle: 'europa', inRange: false, active:false, resolutions:[501000,0] },
    { libelle: 'tromelin', inRange: false, active:false, resolutions:[501000,0] },
    // { libelle: 'scan', inRange: false, active:false, resolutions:[51000,4900] },
    // { libelle: 'orthophoto', inRange: false, active:false, resolutions:[11000,900] },
  ];

  layers = [];

  interactions = [];

  public epsg: number;

  extent: number[];
  
  resolutions = [
    
    8.819439681947015, // 25k
    3.527775872778806, // 10k
    1.763887936389403, // 5k
    0.8819439681947016, // 2.5k
    0.35277758727788067,// 1k
    0.1763887936,// 1k

  ];

  constructor(
    public snackBar: MatSnackBar
  ) { 

    proj4.defs("EPSG:32737", "+proj=utm +zone=37 +south +datum=WGS84 +units=m +no_defs");
    proj4.defs("EPSG:2975", "+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    register(proj4);
  }



  public getProjection() : Projection {
    
  }



  getScale() {
    const projection = new Projection({
      code: 'EPSG:32737',
      units: 'm'
    });

    var resolution = this.map.getView().getResolution(),
        units = this.map.getView().getProjection().getUnits(),
        dpi = 72,
        mpu = projection.getMetersPerUnit();
        
    return resolution * mpu * 39.37 * dpi;
  }



  createMap(   ile_id: number ) {
    this.ile_id = ile_id;

    switch(ile_id) {
      case 1:
        this.epsg = 4326;
        this.extent = [200000, 7600000, 500000, 7730000];
        this.view = new View({          
          center: transform([40.3642, -22.36735], 'EPSG:4326', 'EPSG:3857'),
          zoom: 0,
          projection: 'EPSG:'+ 3857,
          resolutions: this.resolutions
        }); 
      break;
      case 2: 
        this.epsg = 2975;
        this.extent = [230351, 8236400, 241516, 8246491];
        this.view = new View({          
          center: [234620.514455, 8241583.192958],
          zoom: 2,
          projection: 'EPSG:'+ this.epsg,
          // minZoom: 4,
          // maxZoom: 14,
          resolutions: this.resolutions
        });
      break;
    }

    const scaleLineControl = new ScaleLine();
    this.map = new Map({
        layers: [],
        controls: 
          defaultControls({
            attributionOptions:({
              collapsible: false
            })
          })
          .extend([scaleLineControl]),
        target: 'openlayers-map-'+ile_id
    });

  

    this.map.setView( this.view );

    return this.map;
  }



  getMap(): Map  {
    return this.map;
  }



  destroyMap() {
    // this.map.setTarget(null);
    console.log('@TODO: destroyMap : remove interactions, layers, baselayers');
    // DESTROY INTERACTIONS
    this.interactions.forEach(function(item) {
    }, this);

    // DESTROY LAYERS
    this.layers.forEach(function(item) {
    }, this);

    // DESTROY BASELAYERS
    this.baselayers.forEach(function(item) {
    }, this);

  }



  addInteraction = (name:string, valeur: any) => {
    // this.interactions[name] = valeur;
    this.map.addInteraction(valeur);
  }

  getInteraction = (name: string): any => {
      return this.interactions[name];
  }

  removeInteraction(name) {
      if (this.interactions[name] !== undefined || this.interactions[name] !== null) {
          this.map.removeInteraction(this.interactions[name]);
          delete this.interactions[name];
      }
  }



  addLayer(layerName: string, layerDef: Layer ) {
    this.map.addLayer(layerDef);
    this.layers[layerName] = layerDef;
  }
  
  removeLayer(layerName: string) {
    if( this.layers[layerName] ) {
      this.map.removeLayer(this.layers[layerName]);
      delete this.layers[layerName];
    }
  }

  createVectorLayer( name: string ): Layer {

    if ( this.layers[name] ) return this.layers[name];

    const layer = new VectorLayer({
          title: name,
          extent: this.extent,
          source:  new VectorSource({
            projection: 'EPSG:'+ this.epsg})
      });
    this.addLayer(name, layer);

    return layer;
  }

  getVectorLayer( name: string ): Layer {
    if ( this.layers[name] ) return this.layers[name];
  }




  addFeatures( layerName: string, features:any) {

    const source = this.layers[layerName].getSource();

    source.addFeatures( features );

  }

  createFeatureFromGeoJSON( geojson: any ): any  {
    return (new GeoJSON()).readFeature(geojson);
  }

  createFeaturesFromGeoJSON( geojson: any ) {
    return  (new GeoJSON()).readFeatures(geojson);
  }

  populateGeoJSONFeatures( layerName: string, geojson: any, clear: boolean = true ): void {

    if ( geojson === null || geojson === undefined ) {
      this.snackBar.open( 'Aucune données', 'effacer', { duration: 5000,});
      return;
    }

    if ( ! this.layers[layerName] ) {
      this.snackBar.open( 'La couche "'+ layerName + '" n\'existe pas', 'effacer', { duration: 5000,});
        return;
    }

    const source = this.layers[layerName].getSource();

    if ( clear )
      this.clearLayer(layerName);
    
    try {
      const features =  this.createFeaturesFromGeoJSON( geojson );
      
      source.addFeatures( features );
      this.view.fit(source.getExtent(), {size:this.map.getSize(), maxZoom: 5});
    }
    catch(event) {
      console.log('Erreur lors du traitement des géométries')
    }

  }



  clearLayer( layerName: string) {
    const source = this.layers[layerName].getSource();
    source.clear();
  }



  addBaseLayers = () => {
    switch( this.ile_id )  {
      
      case 1:
        const europa =  new TileLayer({
          source: new TileWMS({
              url: 'https://mapserver.cbnm.org/cgi-bin/mapserv?map=/var/www/libraries/refer_ie/mapfiles/standard.map',
              params: {'LAYERS': 'pleiade_IR', 'TILED': true},
              projection: 'EPSG:32737'
          }),
          name: 'europa',
        });
        this.map.addLayer(europa);
        this.baselayers[0].layer = europa;
        break;
      
      case 2:
        const tromelin =  new TileLayer({
          source: new TileWMS({
              url: 'https://mapserver.cbnm.org/cgi-bin/mapserv?map=/var/www/libraries/refer_ie/mapfiles/standard_tromelin.map',
              params: {'LAYERS': 'tromelin', 'TILED': true},
              projection: 'EPSG:'+ this.epsg 
          }),
          name: 'tromelin',
        });
        this.map.addLayer(tromelin);
        this.baselayers[1].layer = tromelin;
        break;

      default:
    }

  }

  

  addLegendLayers() {

  }


  /**
   * Sélectionne la couche de base et cache les autres
   * @param layername nom de la couche de base à afficher
   */
  setBaseLayer( layername: string): void {

    // this.baselayers.map( element => {
    //   if ( element.libelle === layername ) {
    //     element.layer.
    //   }
    // });

  }
  
}
