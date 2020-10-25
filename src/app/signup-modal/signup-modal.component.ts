import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserDescription } from './signup-modal.model';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent {

  userDescription;
  signUpFields = new FormControl('', Validators.required);

  

  constructor(private modalController: ModalController, private formBuild: FormBuilder) { 
    this.userDescription = this.formBuild.group({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    })
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  onRegister() {
    console.log(this.userDescription);
  }

}
