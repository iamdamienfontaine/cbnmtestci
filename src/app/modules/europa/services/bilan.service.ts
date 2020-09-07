import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';

@Injectable({
  providedIn: 'root'
})
export class BilanService {

  constructor(
    private http: HttpClient,
    private appSvc: AppService
  ) { }

  test() {
  }

  getItems(): Observable<any>  {
    
    return this.http.get<any[]>(environment.api + 'api/bilans')
      .pipe(
        catchError( this.appSvc.handleError('getItems', []) )
      )
  }
}
