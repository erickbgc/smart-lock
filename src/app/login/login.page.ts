import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openSignUpModal() {
    const modal = await this.modalController.create({
      component: SignupModalComponent,
    })

    await modal.present();

  }

  ngOnInit() {
  }

}
