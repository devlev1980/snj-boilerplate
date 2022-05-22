import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { InstitutionResearchComponent } from './components/yes-no-dialog/steps/institution-research/institution-research.component';
import { ReaearchDetailsFormComponent } from './components/yes-no-dialog/steps/reaearch-details-form/reaearch-details-form.component';
import { ResearchNameFormComponent } from './components/yes-no-dialog/steps/research-name-form/research-name-form.component';

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
    YesNoDialogComponent,
    InstitutionResearchComponent,
    ReaearchDetailsFormComponent,
    ResearchNameFormComponent,
  ],
  imports: [
    // Modules
    CommonModule,
    MatDialogModule,
    MatListModule
    ,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    MatIconModule,
    MatListModule,
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
