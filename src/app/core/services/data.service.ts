import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class DataService {

  constructor(private http: HttpClient) { }

  request<T>(request: HttpRequest<T>): Observable<HttpResponse<T>> {
    return this.http.request<T>(request).pipe(
      filter((event): event is HttpResponse<T> => event instanceof HttpResponse)
    )
  }

}
