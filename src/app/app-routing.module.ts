import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BaseRoutesComponent } from 'src/app/base-routes/base-routes.component';
import { globals } from 'src/app/common/globals';
import { AppPages } from 'src/app/common/pages.enum';
import { NotFoundPageComponent } from 'src/app/shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: AppPages.Home + "/:id",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pageNotFound',
    component: NotFoundPageComponent,
  },
  {
    path: '',
    redirectTo: `/${AppPages.Home}`,
    pathMatch: 'full',
  },
  // wildcard route -> (path: '**') is at the baseRoutesFactory ↓↓↓
];

// function to create a base route
function createBaseRoute(path: string): Route {
  return {
    path,
    component: BaseRoutesComponent,
    children: routes,
  }
}
//function that creates routes based on the languages available
function baseRoutesFactory(languagesStrings: string[], defaultLanguage: string): Routes {

  let languagesAndWildcard: Routes = new Array();

  for (const language of languagesStrings) {
    // creates routes base on the language names except
    // the default language which is an empty string
    language === defaultLanguage ?
      languagesAndWildcard.push(createBaseRoute('')) :
      languagesAndWildcard.push(createBaseRoute(language));
  }
  // creates the wildcard route as a base route
  // !!! do not add wildcard to child routes !!!
  languagesAndWildcard.push({
    path: '**',
    redirectTo: `/${AppPages.NotFound}`,
    pathMatch: 'full'
  })

  return languagesAndWildcard;
}
@NgModule({
  imports: [RouterModule.forRoot(baseRoutesFactory(globals.supportedLanguages, globals.defaultLanguage))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
