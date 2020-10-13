import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: ['./places-details.page.scss'],
})
export class PlacesDetailsPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    })
  }

  async deletePlace() {

    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure you want to delete this place?',
      message: 'Be careful, you cannot undo this action.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.placesService.deletePlace(this.place.id);
          this.router.navigate(['/places']);
        }
      }
      ]
    });
    await alertElement.present();
  }

}
