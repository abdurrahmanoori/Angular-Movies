import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGeresComponent } from './genres/create-geres/create-geres.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'genres', component: IndexGenresComponent },
    { path: 'genres/create', component: CreateGeresComponent }

];
