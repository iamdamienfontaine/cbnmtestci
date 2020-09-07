import { Injectable } from '@angular/core';

import { Observable ,  of ,  BehaviorSubject, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Router } from '@angular/router';

@Injectable()
export class AppService {

  // private toggleMapSubject = new BehaviorSubject<any>(false);

  uiSubject$: Subject<any>;

  private spinnerQueue: string[] = []
  public displaySpinner: boolean = false;

  getDisplaySpinnerState() {
    return this.displaySpinner;
  }

  constructor(
    // private router: Router,
    public snackBar: MatSnackBar
  ) {

    this.uiSubject$ = new Subject<any>();

  }
  

  getUiSubject = () => {
    return this.uiSubject$;
  }
  



  addToSpinnerQueue( label: string ) {
    let index = this.spinnerQueue.findIndex(item => item === label);
    
    if ( index === -1 ){
      this.spinnerQueue.push(label);
    }

    this.displaySpinner = true;
  }



  removeFromSpinnerQueue( label: string ) {
    let index = this.spinnerQueue.findIndex(item => item === label);
    
    if ( index !== -1 ){
      this.spinnerQueue.splice(index, 1);
    }

    if ( this.spinnerQueue.length === 0 ){
      this.displaySpinner = false;
    }

  }



  handleError<T>( operation = 'operation', result = {} as T ) {
    return (error: HttpErrorResponse): Observable<T> => {

      const message = (error.error instanceof ErrorEvent) ?
        `${operation} - Code d'erreur: ${error.status} - message: "${error.statusText}"` :
        `${operation} - Code d'erreur: ${error.status} - message: "${error.statusText}"`;

      this.snackBar.open
        ( message, 'effacer', { duration: 5000,});

        
      // switch (error.status) {
      //   case 401: {
      //     // this.router.navigate(['/login']);
      //     return of(result);
      //   }
      //   // case 401: {
      //   //   const returnURL: string = '/' + route.url.map(segment => segment.path).join('/');
      //   //   this.router.navigate(['/login'], { queryParams: { returnURL: returnURL }});
      //   //   return Observable.of(null);
      //   // }
      // }


      // Let the app keep running by returning a safe result.
      return of( result );
    };
  }

  


  /**
   * Retourne une portion de tableau 
   * @param dFLores tableau d'origine
   * @param currentPage numéro de la page
   * @param itemsPerPage nombre d'élément à retourner
   */
  sliceItems = ( items: any[], currentPage: number, itemsPerPage: number ): any[] =>  {
    let page: number;
    let begin: number = currentPage * itemsPerPage;
    let end: number = begin + itemsPerPage;
    return items.slice(begin, end);
  }


  serializeData = function( data ) {
 
    // If this is not an object, defer to native stringification.
    if ( typeof data !== "object" || data === null ) {
        return( ( data === null ) ? "" : data.toString() );
    }

    var buffer = [];

    // Serialize each key in the object.
    for ( var name in data ) {
        if ( ! data.hasOwnProperty( name ) || data[ name ] === null ) {
            continue;
        }

        var value = data[ name ];

        buffer.push(
            encodeURIComponent( name ) +
            "=" +
            encodeURIComponent( ( value === null ) ? "" : value )
        );

    }

    // Serialize the buffer and clean it up for transportation.
    var source = buffer
        .join( "&" )
        .replace( /%20/g, "+" )
    ;
    return( source );
};

}



