import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// DO NOT INJECT IT AS TREE SHAKEABLE (this service is injected in other services)
@Injectable()
export class CurrentRequestsService {

  private currentRequests: BehaviorSubject<number> = new BehaviorSubject(0);
  public currentRequests$: Observable<number> = this.currentRequests.asObservable();

  constructor() {
  }

  public addRequest(): void {
    this.currentRequests.next(this.currentRequests.value + 1);
  }

  public removeRequest(): void {
    this.currentRequests.next(this.currentRequests.value - 1);
  }
}
