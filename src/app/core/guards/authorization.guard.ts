import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Injectable({
  providedIn: CoreModule
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authorizationService.authorize();
  }

}
