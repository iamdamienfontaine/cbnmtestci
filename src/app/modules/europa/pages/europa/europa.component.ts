import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import * as fromAppReducer from '../../../../app.reducer';
import { Subscription } from 'rxjs';
import { EuropaExplainComponent } from '../../components/europa-explain/europa-explain.component';



@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {


  getAppState$: Subscription;


  mobileQuery: MediaQueryList;


  sideNavOpened: boolean = true;


  data = {
    ui: {
      sidenavOpened: true,
      sidenavendOpened: false,
      ileId: 1,
    }

  }


  constructor(
    private store: Store<any>,
    media: MediaMatcher,
    private dialog: MatDialog
  ) { 

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.displayExplain();

  }


  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch( new fromAppReducer.PopulateState( { ile_id: this.data.ui.ileId } ) );
    });
    
    this.getAppState$ = this.store.select(fromAppReducer.getState).subscribe(
        ( data ) => {
          if ( data ) {
            this.data.ui.sidenavOpened = data.sidenavOpened;
            this.data.ui.sidenavendOpened = data.sidenavendOpened;
          }
      });

  }


  sidenavClosed = () => {
    this.store.dispatch( new fromAppReducer.PopulateState( {
      sidenavOpened: false
    }));
  }


  sidenavendClosed = () => {
    this.store.dispatch( new fromAppReducer.PopulateState( {
      sidenavendOpened: false
    }));
    
  }


  displayExplain = () => {

    const dialogRef = this.dialog.open( EuropaExplainComponent, {
      maxWidth: '100vw',
      panelClass: 'znDialog'
    });
    
  }

}
