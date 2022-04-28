import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { CurrentRequestsService } from 'src/app/core/services/current-requests.service';
import { CoreModule } from 'src/app/core/core.module';

@Injectable()
export class GlobalLoaderInterceptor implements HttpInterceptor {

  constructor(private currentRequests : CurrentRequestsService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.currentRequests.addRequest();
    return next.handle(request).pipe(
      finalize(() => this.currentRequests.removeRequest())
    );
  }
}
