import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

import { MovieComponent } from './component/movie/movie.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: '', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });