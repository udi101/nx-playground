import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { AgGridState } from '../../../../libs/features/ag-grid/src/lib/state/ag-grid.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    // importProvidersFrom(NgxsModule.forRoot([AgGridState])),
    importProvidersFrom(NgxsModule.forRoot([])),
    importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot()),
    importProvidersFrom(NgxsDispatchPluginModule.forRoot())
  ]
};
