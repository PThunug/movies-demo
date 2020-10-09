import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MoviesService} from '../movies.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private movieService: MoviesService) {
  }

  movie;

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.movie = this.movieService.getMovieBasedOnIndex(this.id);
        }
      );
  }

}
