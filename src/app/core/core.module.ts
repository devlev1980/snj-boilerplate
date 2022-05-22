import { CommonModule } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AuthorizationInterceptor } from 'src/app/core/interceptors/authorization.interceptor';
import { ErrorHandlerInterceptor } from 'src/app/core/interceptors/error-handler.interceptor';
import { GlobalLoaderInterceptor } from 'src/app/core/interceptors/global-loader.interceptor';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { CurrentRequestsService } from 'src/app/core/services/current-requests.service';
import { environment } from 'src/environments/environment';
import {MatButtonModule} from '@angular/material/button';


export function HttpLoaderFactory(httpClient: HttpClient) {
  if (environment.simulateTranslations) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
  } else {
    // TODO : replace the endpoint to a real functioning endpoint
    return new TranslateHttpLoader(httpClient, `${environment.apiBase}/translations`);
  }
}

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateModule,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        MatButtonModule,
    ],
  providers: [
    //services providers
    CurrentRequestsService,
    AuthorizationService,
    //interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalLoaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
