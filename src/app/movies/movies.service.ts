import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs';

import {Movies} from './movies.model';
import {UIService} from '../shared/ui.service';

@Injectable()
export class MoviesService {
  movieChanged = new Subject<Movies>();
  finishedMoviesChanged = new Subject<Movies[]>();
  private availableMovies: Movies[] = [];
  private fbSubs: Subscription[] = [];

  constructor(private db: AngularFirestore, private uiService: UIService) {
  }

  getMovieBasedOnIndex(id) {
    return this.availableMovies[id];
  }

  fetchCompletedOrCancelledExercises() {
    this.fbSubs.push(this.db
      .collection('availableMovies')
      .valueChanges()
      .subscribe((movies: Movies[]) => {
        this.finishedMoviesChanged.next(movies);
        this.availableMovies = movies;
      }));
  }

  addDataToDatabase(movie: Movies) {
    this.db.collection('availableMovies').add(movie);
  }

/*  fetchAvailableMovies() {
    this.db.collection('availableMovies')
      .valueChanges()
      .subscribe(movies => {
        //this.finishedMoviesChanged.next(movies);
      });
  }*/
}
