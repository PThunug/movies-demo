import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MoviesService } from '../movies.service';
import { Movies } from '../movies.model';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-movie-admin',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit, OnDestroy {
  exercises: Movies[];
  isLoading = true;
  private movieSubscription: Subscription;
  private loadingSubscription: Subscription;

  constructor(private movieService: MoviesService, private uiService: UIService) {}

  ngOnInit() {
/*    this.movieSubscription = this.movieService.moviesChanged.subscribe(
      movies => {
        this.exercises = movies;
      }
    );*/
  }

  onAddMovie(form: NgForm) {
    this.movieService.addDataToDatabase(form.value);
  }

  ngOnDestroy() {

  }
}
