import { Component, OnInit, Inject, ViewChild, ComponentRef, SimpleChange } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { PopulationService } from '../../../services/population.service';
import { PopulationActionDirective } from './population-action.directive';
import { PopulationLutteComponent } from '../population-lutte/population-lutte.component';
import { PopulationSuiviComponent } from '../population-suivi/population-suivi.component';
import { PopulationSuiviFataqueComponent } from '../population-suivi-fataque/population-suivi-fataque.component';

export interface DialogData {
  population_id: number;
}

@Component({
  selector: 'population-dialog',
  templateUrl: './population-dialog.component.html',
  styleUrls: ['./population-dialog.component.css']
})
export class PopulationDialogComponent implements OnInit {

  @ViewChild( PopulationActionDirective ) populationDynamicDataDirective: PopulationActionDirective;

  ui: any = {
    toggleList: 'lutte'
  };

  population: any = {
    item: {
      taxon: {}
    },
    bilan: {
      actions:{},
      suivis:{}
    }
  };

  actions: any = {
    items: [],
    displayed: [],
    paginated: [],
    rowCount: 0,
    currentPage: 0,
    itemsPerPage: 10,
    selected: {
      action_id: null,
      type: null
    }
  };

  constructor(
    public dialogRef: MatDialogRef<PopulationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private populationSvc: PopulationService
  ) {}

  ngOnInit() {

    this.populationSvc.getItem( this.data.population_id ).subscribe(
      (data: any) => {
        this.population.item = data.item;
        this.actions.items =  data.actions || [];
        // this.actions.rowCount = this.actions.items.length;
        this.population.bilan = data.bilan;
        this.filterActionsList();
      });
    
    let viewContainerRef = this.populationDynamicDataDirective.viewContainerRef;
    this.populationSvc.setDynamicDataRef(viewContainerRef);

  }


  
  ngOnChanges( changes: { [propKey: string]: SimpleChange }) {

    for (let propName in changes) {
      let changedProp = changes[propName];

      if (changedProp.isFirstChange()) {
        return;
      }
      else if ( propName === 'ui.toggleList' && this[propName] ) {

        
        

      }
    }

  }


  
  filterActionsList() {

    this.actions.displayed.forEach(
      ( item ) => {
        this.actions.items.push(item);
      }
    );
    this.actions.displayed = [];

    this.actions.displayed = this.actions.items.filter( 
        (item) => {
          if ( this.ui.toggleList === undefined) {
            return true;

          }
          else return item.type == this.ui.toggleList
        } 
      );
    this.actions.rowCount = this.actions.displayed.length;
    this.actions.items = this.actions.items.filter( 
      (item) => 
      {
        if ( this.ui.toggleList === undefined ) return false;
        else return item.type != this.ui.toggleList 
      }
    );
    
    this.actions.currentPage = 0;

    this.paginateActionsSuivis();
  }



  pageEventActionsSuivis( event: PageEvent ) {

    this.actions.itemsPerPage = event.pageSize;
    this.actions.currentPage = event.pageIndex;
    
    this.paginateActionsSuivis();
  }


  paginateActionsSuivis() {

    let items: any = [];
    Object.assign( items, this.actions.displayed );

    this.actions.paginated = items.splice( 
      this.actions.itemsPerPage * this.actions.currentPage,
      this.actions.itemsPerPage 
    );
    
  }

  clearActionInfo() {
    this.populationSvc.clearDynamicDataRef();
  }


  /**
   * 
   */
  showActionInfo( type: string, taxon_id: number, action_id: number) {
  
    this.populationSvc.clearDynamicDataRef();

    this.actions.selected = {
      action_id: action_id,
      type: type
    }

    switch (type) {

      case 'lutte':
        let componentLutte: ComponentRef<PopulationLutteComponent> = this.populationSvc.setDynamicDataComponent( PopulationLutteComponent );

        (<any>componentLutte.instance).lutte_id = action_id;
        <any>componentLutte.instance.onClose.subscribe( (data ) => {
          componentLutte.instance.onClose.unsubscribe();
          this.populationSvc.clearDynamicDataRef();
        });
        break;

      case 'suivi':
        let componentSuivi: ComponentRef<PopulationSuiviComponent>;
        switch( taxon_id ) {
          case 1:
          case 2:
            componentSuivi = this.populationSvc.setDynamicDataComponent( PopulationSuiviComponent );    
            break
          case 3:
            componentSuivi = this.populationSvc.setDynamicDataComponent( PopulationSuiviFataqueComponent );
        }
        
        let instance: any = (<PopulationSuiviComponent>componentSuivi.instance);        
        instance.taxon_id = taxon_id;
        instance.suivi_id = action_id;
        instance.onClose.subscribe((data ) => {
          instance.onClose.unsubscribe();
          this.populationSvc.clearDynamicDataRef();
        });

        break;
    }

  }

}
