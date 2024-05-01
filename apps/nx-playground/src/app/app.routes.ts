import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'nx', component: HomeComponent },
  {
    path: 'highcharts',
    loadChildren: () => import('@nx-playground/highcharts').then(m => m.HIGHCHART_ROUTES)
  },
  { path: 'ngxs', component: HomeComponent },
  { path: 'nice-grpc', component: HomeComponent }
];
