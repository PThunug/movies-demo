import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MoviesComponent } from './movies.component';

import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieEditComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  entryComponents: []
})
export class MoviesModule {}
