import { Injectable } from '@angular/core';
import { Event, Message } from '../event/events.models';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

events: Event[] = [];

  constructor() {
    this.events = [
      {
        id: 0,
        name: 'Dereham',
        location: 'Dereham Road',
        goingAmount: 6,
        spaceAmount: 6,
        imageUrl: 'assets/image-1.jpg',
        chatArea: {
          title: 'Football Lads',
          messages: [
            {
              username: 'Bob',
              message: `I can't wait to play tonight`,
              imageUrl: 'assets/image-1.jpg'
            },
            {
              username: 'Tim',
              message: `I'll bring the ball`,
              imageUrl: 'assets/image-1.jpg'
            }
          ]
        }
      },
      {
        id: 1,
        name: 'Norwich FC',
        location: 'Carrow Road',
        goingAmount: 11,
        spaceAmount: 1,
        imageUrl: 'assets/image-6.jpg',
        chatArea: {
          title: 'Football Lads',
          messages: [
            {
              username: 'Bob',
              message: `I can't wait to play tonight`,
              imageUrl: 'assets/image-1.jpg'
            },
            {
              username: 'Tim',
              message: `I'll bring the ball`,
              imageUrl: 'assets/image-1.jpg'
            }
          ]
        }
      },
      {
        id: 2,
        name: 'Attleborough Park',
        location: 'Attleborough',
        goingAmount: 3,
        spaceAmount: 9,
        imageUrl: 'assets/image-2.jpg',
        chatArea: {
          title: 'Football Lads',
          messages: [
            {
              username: 'Bob',
              message: `I can't wait to play tonight`,
              imageUrl: 'assets/image-1.jpg'
            },
            {
              username: 'Tim',
              message: `I'll bring the ball`,
              imageUrl: 'assets/image-1.jpg'
            }
          ]
        }
      }
    ];
  }

  getById (id: number): Event {
    return this.events.find(p => p.id === id);
  }

  addMessage(eventId: number, editor: Message) {
    const event = this.events.find(p => p.id === eventId);

    if (!event) {
      return;
    }

    event.chatArea.messages.push(editor);
  }

  addEvent(editor: Event) {
    this.events.push(editor);
  }

  getLatestEventId (): number {
    let latestId = 0;
    this.events.forEach(element => {
      if (element.id > latestId) {
        latestId = element.id;
      }
    });
    latestId++;
    return latestId;
  }

}
