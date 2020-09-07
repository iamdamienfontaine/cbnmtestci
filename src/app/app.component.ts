import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription }    from 'rxjs';
import { Store }      from '@ngrx/store';

import { AppService } from './app.service';
import * as fromAppReducer from './app.reducer';
import { ArticlesService } from './modules/articles/articles.service';

declare let EEE_IE_CONFIGURATION: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavend') public sidenavend: MatSidenav;

  /*
   * Subscription aux évènements de l'interface
   */
  getAppState$: Subscription;

  data = {
    title: 'Iles Eparses - lutte EEE',
    ui: {
      ile_id: null
    },
    displayIslandToolbar: false,
    // maj: EEE_IE_CONFIGURATION.maj
  }

  taxon_id: number;

  mobileQuery: MediaQueryList;
  

  displaySpinner: boolean = false;

  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<any>,
    private appSvc: AppService,
    private articleSvc: ArticlesService
  ) {

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      /*
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        */

  }



  ngOnInit() {
      this.getAppState$ = this.store.select( fromAppReducer.getState ).subscribe(
        ( data ) => {
              this.data.ui = data;
              // console.log(EEE_IE_CONFIGURATION)
        });
            
  }



  ngAfterViewChecked() {
    let show = this.appSvc.displaySpinner;
    if (show != this.displaySpinner) {
      this.displaySpinner = show;
      this.cdRef.detectChanges();
    }
  }



  ngOnDestroy(): void {
    /*
      this.mobileQuery.removeListener(this._mobileQueryListener);
      */
     console.log('j')
    this.getAppState$.unsubscribe();
  }

  

  /**
   * Affiche un article
   * @param article Nom de l'article 
   */
  showArticle( article:string ) {
    this.articleSvc.showArticle(article);
  }



  /**this.store.select(fromAppReducer.getAppState).subscribe
   * Affiche la toolbar de sélection d'une île
   */
  toggleIslandToolbar() {
    this.data.displayIslandToolbar = !this.data.displayIslandToolbar;
  }



  toggleIslandId( id: Number ) {

    /**
     * On ferme la toolbar de sélection d'une île
     */
    this.data.displayIslandToolbar = false;

    switch ( id ) {
      case 1:
        this.router.navigate(['/europa']);   
      break;

      case 2:
        this.router.navigate(['/tromelin']);   
      break;

    }


  }

}
