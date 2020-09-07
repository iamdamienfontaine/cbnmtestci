import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAppReducer from '../../../../app.reducer';
import { TromelinExplainComponent } from '../../components/tromelin/tromelin-explain/tromelin-explain.component';


@Component({
  selector: 'app-tromelin',
  templateUrl: './tromelin.component.html',
  styleUrls: ['./tromelin.component.css']
})
export class TromelinComponent implements OnInit {


  /*
   * Subscription aux évènements de l'interface
   */
  getAppState$: Subscription;
  

  /**
   * Test taille du media
   */
  mobileQuery: MediaQueryList;



  data = {
    ui: {
      ileId: 2,
      sidenavOpened: true
    }
  };



  constructor(
    media: MediaMatcher,
    private store: Store<fromAppReducer.AppState>,
    private dialog: MatDialog
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this.displayExplain();
  }



  ngOnInit() {
    
    this.getAppState$ = this.store.select(fromAppReducer.getAppState).subscribe(
      ( data ) => {

        if ( data ) {
          this.data.ui.sidenavOpened = data.sidenavOpened;
        }
    });


    setTimeout(() => {
      this.store.dispatch( new fromAppReducer.PopulateState( { ile_id: this.data.ui.ileId } ) );
    });

  }



  sidenavClosed = () => {
    this.store.dispatch( new fromAppReducer.PopulateState( {
      sidenavOpened: false
    }));
  }



  displayExplain = () => {

    const dialogRef = this.dialog.open( TromelinExplainComponent, {
      maxWidth: '100vw',
      panelClass: 'znDialog'
    });
    
  }

}
