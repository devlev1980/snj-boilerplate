import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor( 
    private authorization : AuthorizationService,
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = sessionStorage.getItem('token');
    if(token){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authorization.getToken())
      });
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
