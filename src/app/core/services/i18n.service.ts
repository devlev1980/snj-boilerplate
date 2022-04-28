import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CoreModule } from 'src/app/core/core.module';
import { LanguageToDirection } from 'src/app/core/mappers/language-direction.mapper';
import { Direction } from 'src/app/core/types/direction.type';
import { Language } from 'src/app/core/types/language.type';

@Injectable({
  providedIn: CoreModule
})
export class I18nService {

  private direction: BehaviorSubject<Direction> = new BehaviorSubject<Direction>('rtl')
  direction$: Observable<Direction> = this.direction.asObservable();

  constructor(private translate: TranslateService, private router: Router, private route: ActivatedRoute) { }

  initializeTranslations(defaultLangauge: string, supportedLanguages: string[]) {
    this.translate.addLangs(supportedLanguages);
    this.translate.setDefaultLang(defaultLangauge);
  }

  observeUrlForLanguageChange(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(o => {
      this.changeLanguageAndDirection(this.getCurrentRouteLanguagePrefix());
    });
  }

  public changeLanguageAndDirection(language : Language): void {
    let direction : Direction = LanguageToDirection[language];
    this.changeDirection(direction);
    this.changeLanguage(language);
  }

  private changeDirection(direction: Direction): void {
    this.direction.next(direction);
  }

  private getCurrentRouteLanguagePrefix(): Language {
    // get the language from the route url if the language is undefined use default language 
    return ((this.router.routerState.root.firstChild?.snapshot.url[0]?.path ?? this.translate.defaultLang) as Language)
  }

  private changeLanguage(language: Language): void {
    this.translate.use(language);
  }
}
