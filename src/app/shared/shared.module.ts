import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';

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
    NotFoundPageComponent,
  ],
  imports: [
    // Modules
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // Componenets

    // Directives

    // Pipes
  ],
  exports: [
    // Modules
    TranslateModule
    // Componenets

    // Directives

    // Pipes
  ]
})
export class SharedModule { }
