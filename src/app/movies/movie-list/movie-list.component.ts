import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { Movies } from '../movies.model';
import { MoviesService } from '../movies.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['description', 'title', 'yourrating', 'comments', 'averageratings'];
  dataSource = new MatTableDataSource<Movies>();
  private exChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    this.exChangedSubscription = this.movieService.finishedMoviesChanged.subscribe(
      (movies: Movies[]) => {
        this.dataSource.data = movies;
      }
    );
    this.movieService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {

  }

/*  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

  ngOnDestroy() {
    if (this.exChangedSubscription) {
      this.exChangedSubscription.unsubscribe();
    }
  }
}
