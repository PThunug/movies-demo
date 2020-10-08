import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { MoviesService } from '../movies/movies.service';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChange = new Subject<any>();
  private isAuthenticated = false;
  private isAdminUser = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: MoviesService,
    private uiService: UIService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        if ( user.email === 'admin@cyr3con.ai' ) {
          this.isAdminUser = true;
          this.authChange.next({ isAuth: true, isAdmin: true } );
        } else {
          this.authChange.next({ isAuth: true, isAdmin: false } );
        }
        this.isAuthenticated = true;
        this.router.navigate(['/movies/movielist']);
      } else {
        //this.trainingService.cancelSubscriptions();
        this.authChange.next({ isAuth: false, isAdmin: false });
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
  isAdmin() {
    return this.isAdminUser;
  }
}
