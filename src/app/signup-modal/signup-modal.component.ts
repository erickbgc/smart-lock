import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

// Firebase configuration
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent {

  // Form validator
  signupFields

  constructor(
    private modalController: ModalController,
    private formBuild: FormBuilder,
    private _fireauth: AuthService,
  ) {
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

  // When user register
  onSubmit = () => {
    this._fireauth.onRegister(this.signupFields.value.email, this.signupFields.value.password);
    this.dismissModal();
  }

}
