import { Routes } from '@angular/router';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { ColumnsComponent } from './columns/columns.component';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChartsState } from './state/charts.state';


export const HIGHCHART_ROUTES: Routes = [
  {
    path: '',
    component: HighchartsComponent,
    providers: [importProvidersFrom(NgxsModule.forFeature([ChartsState]))],
    children: [
      {
        path: 'columns',
        component: ColumnsComponent
      }
    ]
  }

];
