
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { AppService } from '../app.service';
// import { appService } from '../app.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private appService: AppService
  ) {

  }

  construct(
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.appService.addToSpinnerQueue(req.url);
    
    // const started = Date.now();
    let ok: string;

    // const authReq = req.clone({ headers: req.headers.set("Access-Control-Allow-Origin", "https://51.75.99.222")});
    const authReq = req.clone();
    // extend server response observable with logging
    return next.handle(authReq)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          // const elapsed = Date.now() - started;
          // const msg = `${req.method} "${req.urlWithParams}"
          //    ${ok} in ${elapsed} ms.`;
          
          this.appService.removeFromSpinnerQueue(req.url);

        })
      );
  }
}