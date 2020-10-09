import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MoviesService } from '../movies.service';
import { Movies } from '../movies.model';
import { UIService } from '../../shared/ui.service';
import {MatTableDataSource} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-movie-admin',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit, OnDestroy {
  exercises: Movies[];
  isLoading = true;
  obs: Observable<any>;
  private movieSubscription: Subscription;
  private loadingSubscription: Subscription;
  dataSource = new MatTableDataSource<Movies>();
  private exChangedSubscription: Subscription;
  private editFlag: any = [];

  constructor(private movieService: MoviesService, private uiService: UIService) {}

  ngOnInit() {
    this.obs = this.dataSource.connect();
    this.exChangedSubscription = this.movieService.finishedMoviesChanged.subscribe(
      (movies: Movies[]) => {
        this.dataSource.data = movies;
        /*self.tempdata.data = [...this.dataSource.data];*/
      }
    );
    this.movieService.fetchCompletedOrCancelledExercises();
  }

  deleteAction( index ) {
    this.dataSource.data.splice(index, 1);
  }
  saveAction( index ) {
    this.editFlag[index] = false;
  }
  editAction( index ) {
    this.editFlag[index] = true;
  }
  onAddMovie(form: NgForm) {
    this.movieService.addDataToDatabase(form.value);
  }

  ngOnDestroy() {

  }
}
