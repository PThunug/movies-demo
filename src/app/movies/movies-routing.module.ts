import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'movielist', component: MovieListComponent},
  { path: 'movielist/:id', component: MovieDetailComponent },
  { path: 'dashboard', component: MovieEditComponent },
  { path: '',   redirectTo: '/movielist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
