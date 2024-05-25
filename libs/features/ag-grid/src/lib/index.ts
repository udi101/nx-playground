import { Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AgGridState } from './state/ag-grid.state';


export const AG_GRID_ROUTES: Routes = [
  {
    path: '',
    component: AgGridComponent,
    providers: [
      importProvidersFrom(NgxsModule.forFeature([AgGridState]))
    ]
  }
];
