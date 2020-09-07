import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, distinctUntilChanged } from 'rxjs/operators';


import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';


import { TaxonItem, ActionsHttpResponse } from '../interfaces/tromelin.interface';


@Injectable()
export class TromelinService {



  constructor(
    private http: HttpClient,
    private appSvc: AppService
  ) { }



  /**
   * Récupération de la liste des taxons
   *
   * @param filters
   */
  getTaxons() : Observable<TaxonItem[]>  {

    return this.http.get<TaxonItem[]>(environment.api + 'api/tromelin/taxons' )
      .pipe(
        catchError( this.appSvc.handleError('TROMELIN - Récupération de la liste des taxons', []) )
      )
  }

  /**
   * Récupération de la liste des taxons
   *
   * @param filters
   */
  getTaxonsActions( filters ) : Observable<ActionsHttpResponse>  {
    
    let params: HttpParams = new HttpParams();

    for( let key in filters) {
      params = params.append( key, filters[key] );
    };

    return this.http.post<ActionsHttpResponse>(environment.api + 'api/tromelin/actions/' + filters.taxon_id, params )
      .pipe(
        distinctUntilChanged(),
        catchError( this.appSvc.handleError('TROMELIN - Récupération de la liste des actions du taxon n°'+ filters.taxon_id, <ActionsHttpResponse>null) )
      )
  }

}
