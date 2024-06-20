import { Routes } from '@angular/router';
import { SuperheroListComponent } from './components/superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './components/superhero-detail/superhero-detail.component';

export const routes: Routes = [
  {
    path: 'superhero/:id',
    component: SuperheroDetailComponent,
  },
  {
    path: '**',
    component: SuperheroListComponent,
  },
];
