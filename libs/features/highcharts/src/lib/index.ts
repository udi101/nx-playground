import { Routes } from '@angular/router';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { ColumnsComponent } from './columns/columns.component';

export const HIGHCHART_ROUTES: Routes = [
  {
    path: '',
    component: HighchartsComponent
  },
  {
    path: 'columns',
    component: ColumnsComponent
  }
];
