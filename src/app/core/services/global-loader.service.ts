import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { CoreModule } from 'src/app/core/core.module';
import { CurrentRequestsService } from 'src/app/core/services/current-requests.service';

@Injectable({
  providedIn: CoreModule
})
export class GlobalLoaderService {

  public isLoaderEnabled$: Observable<boolean>;

  constructor(private currentRequests: CurrentRequestsService) {
    this.isLoaderEnabled$ = this.currentRequests.currentRequests$.pipe(
      map(requests => {
        return requests != 0;
      }),
      distinctUntilChanged()
    )
  }

}
