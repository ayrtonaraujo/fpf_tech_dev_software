import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' }) //
export class AppTitleStrategy extends TitleStrategy {


  private readonly appName = 'FinanSis';

  constructor(private readonly title: Title) {
    super();
  }


  override updateTitle(routerState: RouterStateSnapshot): void {

    const pageTitle = this.buildTitle(routerState);


    if (pageTitle) {
      this.title.setTitle(`${this.appName} | ${pageTitle}`);
    } else {

      this.title.setTitle(this.appName);
    }
  }
}
