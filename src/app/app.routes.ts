import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenresComponent } from './index-genres/index-genres.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'genres', component: IndexGenresComponent }

];
