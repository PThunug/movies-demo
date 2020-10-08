import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-training',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  ongoingTraining = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {

  }

}
