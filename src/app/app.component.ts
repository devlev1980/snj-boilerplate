import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globals } from 'src/app/common/globals';
import { I18nService } from 'src/app/core/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private i18n: I18nService) {
  }

  ngOnInit(): void {
    this.i18n.initializeTranslations(globals.defaultLanguage, globals.supportedLanguages)
    this.i18n.observeUrlForLanguageChange();
  }
}
