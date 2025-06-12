import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter} from '@angular/router';
import {TitleStrategy} from '@angular/router';

import { AppTitleStrategy } from './app-title.strategy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    { provide: TitleStrategy, useClass: AppTitleStrategy }
  ]
};
