import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiMap } from 'src/app/common/api.map';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  authorize(): Observable<boolean> {
    let token = this.getToken();
    return token ? this.isUserAuthroized(token) : of(false);
  }

  getToken(): string | null {
    //change to localStorage or cookie if needed
    return sessionStorage.getItem('token');
  }

  private isUserAuthroized(token: string): Observable<boolean> {
    //send request to authorize to the server
    //change the code if necessary to fit the application
    return this.http.request(ApiMap.isUserAuthroized).pipe(
      filter((event): event is HttpResponse<unknown> => event instanceof HttpResponse),
      map((response: HttpResponse<unknown>) => {
        return !(response.status != 401 && response.status != 403);
      })
    );
  }
}
