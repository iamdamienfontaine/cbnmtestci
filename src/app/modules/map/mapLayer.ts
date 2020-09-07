import { getLocaleDayPeriods } from "@angular/common";
import { MapService } from './map.service';

import Select from  'ol/interaction/Select'



export class MapLayer {

    mapService: MapService;

    interactions: any = new Map();
    overlays: any = new Map();

    itemSelected = {
        item: {}
    };

    selectFunct = function() {};

    constructor(
        mapSvc: MapService 
      ) { 
        this.mapService = mapSvc;
      }


    bootstrap() {

        // getLayer();

    }


    getLayer() {}


    addSelectInteraction_( name, funct ) {

        let interaction  =  new Select({ layers: [this.getLayer()] });

        this.interactions.set( name, {
                interaction: interaction,
                funct: funct
            });        
        interaction.on('select', funct);

        this.mapService.addInteraction(name, interaction);

    }
}
