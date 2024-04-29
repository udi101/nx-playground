import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgxsModule } from '@ngxs/store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    importProvidersFrom(NgxsModule.forRoot([]))]
};
