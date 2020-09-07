import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromAppReducer from '../../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private router: Router,
    private store:  Store<fromAppReducer.AppState>
  ) { }


  showArticle( article: string ) {

    let component: any;

    this.store.dispatch( new fromAppReducer.PopulateState( {
      ile_id: null
    }));

    switch( article ) {
      case 'programmes':
        this.router.navigate(['/programmes']);
      break;
      case 'a_propos':
        this.router.navigate(['/apropos']);
      break;
      case 'contacts':
        this.router.navigate(['/contacts']);
      break;
      case 'accueil':
        this.router.navigate(['/accueil']);
      break;
      case 'mentions_legales':
        this.router.navigate(['/mentionslegales']);
      break;
      case 'politique_de_confidentialite':
        this.router.navigate(['/politiqueconfidentialite']);
      break;
      case 'politique_de_cookies':
        this.router.navigate(['/politiquecookies']);
      break;
    }

  }

}
