import { Component, OnInit, OnDestroy, Input, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';


import { AppService } from '../../../../../app.service';
import { PopulationsService } from '../../../services/populations.service';
import { PopulationsSigService } from '../../../services/populations-sig.service';
import { PopulationDialogComponent } from '../../population/population-dialog/population-dialog.component'
import { BilanComponent } from '../../bilan/bilan.component';


@Component({
  selector: 'populations-list',
  templateUrl: './populations-list.component.html',
  styleUrls: ['./populations-list.component.css']
})
export class PopulationsListComponent implements OnInit {

  @Input()  sidenav: any;

  uiSubject$: Subject<any>;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  activePopulation: any;

  data = {
    items: [],
    items_displayed: [],
    filters: {
      taxon_id: null,
      itemsPerPage: 10,
      currentPage: 0,
      rowCount: 0,
      limitstart: 0
    }
  }


  constructor(
    private populationsSvc: PopulationsService,
    private populationsSigSvc: PopulationsSigService,
    private dialog: MatDialog,
    private appSvc: AppService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
    
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }



  ngOnInit() {

    this.uiSubject$ = this.appSvc.getUiSubject();

   
  }


  ngAfterViewInit() {
    this.populationsSigSvc.getLayer();
    this.populationsSigSvc.addSelectInteraction(this.onSelectOnMap.bind(this));
    this.getItems();
  }


  ngOnDestroy() {
    this.populationsSigSvc.removeLayer();
  }


  filter() {

    this.data.items_displayed.forEach(
      ( item ) => {
        this.data.items.push(item);
      }
    );
    this.data.items_displayed = [];

    this.data.items_displayed = this.data.items.filter(item => item.taxon_id == this.data.filters.taxon_id )  ;
    this.data.items = this.data.items.filter(item => item.taxon_id != this.data.filters.taxon_id);

    this.populationsSigSvc.filterFeatureByTaxon(this.data.filters.taxon_id);

  }



  trackByTaxonId(index: number, population: any): number { return population.taxon_id; }



  /**
   * 
   */
  getItems() {
    this.populationsSvc.getItems( this.data.filters ).subscribe(
      (data: any) => {
        this.data.items = data.items;
        const priors: any = this.data.items.filter( (element) => {
            return element.geojson_prior
          }
        );

        this.getItemsFeatures(priors);

      });
  }
  


  getItemsFeatures( pops_prior: any ) {
    this.populationsSigSvc.getFeatures( this.data.filters ).subscribe( () => {
        
        this.populationsSigSvc.addPopPrioritaire(pops_prior);

        this.data.filters.taxon_id = "1";
        this.filter()

      });
  }
  


  /**
   * 
   */
  showInfo( population_id: number) {
   
    const dialogRef = this.dialog.open( PopulationDialogComponent, {
      data: {population_id: population_id},
      maxWidth: '100vw',
      panelClass: 'znDialog'
    });

    dialogRef.afterClosed();

    this.populationsSigSvc.highlightFeature(population_id);

    this.activePopulation = population_id;

  }



  onSelectOnMap( event ) {

    if ( !event.selected[0] ) {
      this.activePopulation = undefined;
      return;
    } 

    this.showInfo(event.selected[0].get('population_id'));
    document.getElementById( 'popId'+ event.selected[0].get('population_id') ).scrollIntoView();

  }



  /**
   * 
   * @param event 
   */
  showOnMap( event: Event, population_id: any ) {

    event.preventDefault();
    event.stopPropagation();

    this.populationsSigSvc.highlightFeature(population_id);
    this.activePopulation = population_id;
    
    // if ( this.mobileQuery.matches )
    //   this.uiSubject$.next( {
    //     sidenavToggle: true
    //   });
  }



  showBilan() {
    const dialogRef = this.dialog.open( BilanComponent, {
      // id: 'bilanDialog',
      height: '90%',
      minWidth: '60vw',
      panelClass: 'article'
    } );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
