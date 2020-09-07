import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TromelinService } from '../../../services/tromelin.service';
import { TromelinSigService } from '../../../services/tromelin-sig.service';
import { TaxonItem } from '../../../interfaces/tromelin.interface';
import { TaxonInfosComponent } from '../../taxon/taxon-infos/taxon-infos.component';




@Component({
  selector: 'tromelin-taxons-list',
  templateUrl: './taxons-list.component.html',
  styleUrls: ['./taxons-list.component.css']
})
export class TaxonsListComponent implements OnInit {

  @Input()  sidenav: any;


  /**
   * data.items: Liste des taxons
   */
  public data = {
    items: <TaxonItem[]>[],
    activeItem: <number>null
  }

  

  /**
   * 
   * @param tromelinSvc 
   */
  constructor(
    private tromelinSvc: TromelinService,
    public  snackBar: MatSnackBar,
    private dialog: MatDialog,
    private tromelinSigSvc: TromelinSigService
  ) {}



  /**
   * 
   */
  ngOnInit(): void {

    this.tromelinSvc.getTaxons().subscribe(

      (data) => {
        this.data.items = data;
      },

    );
  }

  ngAfterViewInit() {
    this.tromelinSigSvc.getLayer();

  }

  ngOnDestroy(): void {
    this.tromelinSigSvc.removeLayer();
    
  }



  /**
   * Liste des taxons identifiant unique
   * @param index 
   * @param population 
   */
  trackByTaxonId( index: number, taxon: any): number { return taxon.id }



  /**
   * 
   */
  showTaxonInfos = ( id: number ) => {
    
    let index = this.data.items.findIndex(item => item.id === id);
    
    if ( index === -1 ){
      this.snackBar.open( "Erreur - Les données du taxon sont absentes", 'fermer', { duration: 3000 });
    }

    const dialogRef = this.dialog.open( TaxonInfosComponent, {
      data: this.data.items[index],
      maxWidth: '100vw',
      panelClass: 'znDialog'
    });

    dialogRef.afterClosed();

    // On fixe l'item actif dans la liste des taxons
    this.data.activeItem = id;

  }



  /**
   * 
   */
  showTaxonLocations = ( id: number) => {
    

    this.tromelinSigSvc.getFeatures( id ).subscribe(

      (data) => {
        
      },

    );

    // On fixe l'item actif dans la liste des taxons
    this.data.activeItem = id;

  }
}
