import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { AppService } from '../../../app.service';
import { PopulationItem } from '../interfaces/populations.interface';


@Injectable({
  providedIn: 'root'
})

export class PopulationService {


  dynamicDataRef: ViewContainerRef;

  constructor(
    private http: HttpClient,
    private appSvc: AppService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { 
    
  }


  getItem( population_id: number ) : Observable<PopulationItem> {
    const url = environment.api + 'api/population/'+ population_id;

    return this.http.get<PopulationItem>( url )
      .pipe(
        catchError( this.appSvc.handleError('getItems', {} as PopulationItem) )
      )
  }



  getLutte( action_id: number ) : Observable<any> {
    const url: string = environment.api + 'api/lutte/'+ action_id;
    
    return this.http.get<any>( url )
      .pipe(
        catchError( this.appSvc.handleError('getLutte', {} as any) )
      )
  }



  getSuivi( taxon_id: number, suivi_id: number ) : Observable<any> {
    const url: string = environment.api + 'api/suivi/' + taxon_id + '/' + suivi_id;

    return this.http.get<any>( url )
      .pipe(
        catchError( this.appSvc.handleError('getSuivi', {} as any) )
      )
  }




  setDynamicDataRef = ( ref: ViewContainerRef ) => {
    this.dynamicDataRef = ref;
  }

  clearDynamicDataRef = () => {
    this.dynamicDataRef.clear();
  }

  setDynamicDataComponent = ( component ): ComponentRef<any> => {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.dynamicDataRef.clear();
    return this.dynamicDataRef.createComponent(componentFactory);    
  }

}
