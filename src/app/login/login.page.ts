import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

// Auth Firebase Service
import { AuthService } from '../services/auth.service';

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
    private _fireauth: AuthService,
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

  // When User Log in
  onSubmit = () => {
    this._fireauth.onLogin(this.loginFields.value.email, this.loginFields.value.password);
  }

  ngOnInit() {
  }

}
