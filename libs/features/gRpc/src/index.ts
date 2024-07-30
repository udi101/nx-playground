import { Routes } from '@angular/router';
import { GRcpComponent } from './lib/gRpc/gRpc.component';
import { NgxsModule } from '@ngxs/store';
import { importProvidersFrom } from '@angular/core';
import { AgGridState } from '@nx-playground/ag-grid';

export * from './lib/gRpc/gRpc.component';

export const GRCP_ROUTES: Routes = [
  {
    path: '',
    component: GRcpComponent,
    providers: [
      importProvidersFrom(NgxsModule.forFeature([AgGridState]))
    ]
  }
];
