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
    return token ? this.isAuthorized(token) : of(false);
  }

  /**
   * Change to localStorage or cookie if needed
   */
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  /**
   * Send request to authorize to the server
   * Change the code if necessary to fit the application
   * @param token
   * @private
   */
  private isAuthorized(token: string): Observable<boolean> {
    return this.http.request(ApiMap.isAuthorized).pipe(
      filter((event): event is HttpResponse<unknown> => event instanceof HttpResponse),
      map((response: HttpResponse<unknown>) => {
        return !(response.status != 401 && response.status != 403);
      })
    );
  }
}
