import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { snapshotToArray } from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  items = [];
  ref = firebase.database().ref('/');
  doorValue: boolean = true;
  inputText: string;

  constructor(
    public loadingCtrl: LoadingController
  ) { 
    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp); //No importa porque con esto seteamos los valores de la rama, pero aun no los hemos introducido
      console.log("Respuesta de Firebase: ", resp);
      console.log("Dentro del constructor, elemento igualado a snapshotTo: ", this.items);
    });
  }

  async actionDoor(item) {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });

    await loading.present();

    setTimeout(async () => {
      try {
        if (!this.doorValue || this.doorValue === undefined) {
          item.lock = 0;
          let newItem = item;
          console.log('Enviando a firebase con el boton!...', item);
          this.ref.set(newItem);
          this.doorValue = true;
        } else if(this.doorValue){
          item.lock = 1;
          let newItem = item;
          console.log('Enviando a firebase con el boton!...', item);
          this.ref.set(newItem);
          this.doorValue = false;
        } else {
          console.log("No message sent");
        }
      } catch (error) {
        console.log(error);
      }
      await loading.dismiss();
    }, 1500);

  }

  ngOnDestroy() {
    this.doorValue = true;
  }

  ngOnInit() {
  }

  // addItem(item) {
  //   if (item !== undefined && item !== null) {
  //     item.lock = parseInt(item.lock);
  //     this.inputText = "";
  //     let newItem2 = item;
  //     console.log("Enviando a firebase....",item)
  //     this.ref.set(newItem2);

  //     //let newItem = this.ref.push(); //instanciamos el pusheo a la db de firebase
  //     //console.log(`Dentro de addItem: ${newItem}`);
  //     //console.log('Nuestro item!!: ', item); //Item es lo que pasamos por el input
  //     //newItem.set(item);
  //   }
  // }

}
