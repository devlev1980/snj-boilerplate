import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Observable } from 'rxjs';
import { BaseRoutesComponent } from './base-routes/base-routes.component';
import { I18nService } from 'src/app/core/services/i18n.service';
import { DOCUMENT } from '@angular/common';

export function initializeApp(i18n : I18nService, doc : Document): (() => Promise<any>) | (() => Observable<any>) {
  i18n.direction$.subscribe( d => {
    console.log("direction",d)
    doc.dir = d;
  })
  return () => Promise.resolve();

}

@NgModule({
  declarations: [
    AppComponent,
    BaseRoutesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [I18nService, DOCUMENT],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
