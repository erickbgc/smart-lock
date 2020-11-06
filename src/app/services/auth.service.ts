import { Injectable } from '@angular/core';

// Firebase Auth Configuration
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
  
export class AuthService {
  constructor(private _auth: AngularFireAuth, private router: Router) { }

  onLogin(email, password) {
    this._auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (firebase.auth().currentUser.emailVerified) {
          console.log('Access has been granted', user);
          // this.authGuardService.authInfo.authenticated = true;
          this.router.navigate(['/app/home']);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onRegister(email, password) {
    this._auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification();
        this.router.navigate(['/app/home']);
      })
      .catch((err) => {
        console.log(err);
    })
  }

}
