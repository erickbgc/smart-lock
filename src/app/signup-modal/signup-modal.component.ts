import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserDescription } from './signup-modal.model';

// Firebase configuration
import * as firebase from 'firebase';
import { environment } from "../../environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent {

  // Form validator
  signupFields

  constructor(private modalController: ModalController, private formBuild: FormBuilder, private _auth: AngularFireAuth, private router: Router) {
    this.signupFields = this.formBuild.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() { }

  dismissModal() {
    this.modalController.dismiss();
  }

  onRegister() {
    this._auth.createUserWithEmailAndPassword(this.signupFields.value.email, this.signupFields.value.password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification();
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
    })
  }

}
