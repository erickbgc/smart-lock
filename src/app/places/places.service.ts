import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/b0/79/79.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Liberty',
      imageUrl: 'https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTY1MTc1MTk3ODI0MDAxNjA5%2Ftopic-statue-of-liberty-gettyimages-960610006-promo.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '3',
      title: 'Angel Statue',
      imageUrl: 'https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTY1MTc1MTk3ODI0MDAxNjA5%2Ftopic-statue-of-liberty-gettyimages-960610006-promo.jpg',
      comments: []
    },
  ]

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title:string, imageUrl:string) {
    this.places.push({
      title,
      imageUrl,
      comments: [],
      id: this.places.length + 1 + ""
    })
  }

  deletePlace(placeId:string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
