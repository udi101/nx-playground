import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'nx', component: HomeComponent },
  {
    path: 'highcharts',
    loadChildren: () => import('@nx-playground/highcharts').then(m => m.HIGHCHART_ROUTES)
  },
  {
    path: 'ag-grid',
    loadChildren: () => import('@nx-playground/ag-grid').then(m => m.AG_GRID_ROUTES)
  },
  { path: 'ngxs', component: HomeComponent },
  {
    path: 'nice-grpc',
    loadChildren: () => import('@nx-playground/gRcp').then(m => m.GRCP_ROUTES)
  }
];
