import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


import { environment } from '../../../../environments/environment';

import { AppService } from '../../../app.service';
import { PopulationItem } from '../interfaces/populations.interface';



@Injectable({
  providedIn: 'root'
})
export class PopulationsService {

  constructor(
    private http: HttpClient,
    private appSvc: AppService
  ) { }



  getItems( filters: any ) : Observable<PopulationItem[]>  {
    let params = new HttpParams();
    for( let key in filters) {
      params = params.append( key, filters[key] );
    };
    
    // params = new HttpParams().set( 'taxon_id', filters .toString() );
    return this.http.post<PopulationItem[]>(environment.api + 'api/populations', params )
      .pipe(
        catchError( this.appSvc.handleError('getItems', []) )
      )
  }

}
