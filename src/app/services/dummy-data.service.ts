import { Injectable } from '@angular/core';
import { Event } from '../event/events.models';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  events: Event[] = [];

constructor() {
  this.events = [
    {
      name: 'Dereham',
      location: 'Dereham Road',
      goingAmount: 6,
      spaceAmount: 6,
      imageUrl: 'assets/image-1.jpg',
    },
    {
      name: 'Norwich FC',
      location: 'Carrow Road',
      goingAmount: 11,
      spaceAmount: 1,
      imageUrl: 'assets/image-6.jpg',
    },
    {
      name: 'Attleborough Park',
      location: 'Attleborough',
      goingAmount: 3,
      spaceAmount: 9,
      imageUrl: 'assets/image-2.jpg',
    }

  ];
}



}
