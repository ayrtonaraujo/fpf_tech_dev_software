import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter} from '@angular/router';
import {TitleStrategy} from '@angular/router';

import { provideNgxMask } from 'ngx-mask';

import { AppTitleStrategy } from './app-title.strategy';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    provideNgxMask(),

    { provide: TitleStrategy, useClass: AppTitleStrategy }
  ]
};
