import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

// Firebase configuration
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFields

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private _auth: AngularFireAuth,
    private router: Router,
  ) {
    this.loginFields = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async openSignUpModal() {
    const modal = await this.modalController.create({
      component: SignupModalComponent,
    })

    await modal.present();

  }

  ngOnInit() {
  }

  onLogin() {
    this._auth.signInWithEmailAndPassword(this.loginFields.value.email, this.loginFields.value.password)
      .then((user) => {
        if (firebase.auth().currentUser.emailVerified) {
          console.log('Access has been granted', user);
          // this.authGuardService.authInfo.authenticated = true;
          this.router.navigate(['/']);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }


}
