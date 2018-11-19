import { Component, OnInit } from '@angular/core';
import { Event, ChatArea } from '../../events.models';
import { DummyDataService } from '../../../services/dummy-data.service';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  editor: Event = new Event();

  constructor(
    public dummyDataService: DummyDataService,
    public router: Router,
  ) {

  }

  ngOnInit() {

  }

  submit() {
    this.editor.id = this.dummyDataService.getLatestEventId();
    this.editor.imageUrl = 'assets/image-5.jpg';
    this.editor.goingAmount = 0;
    this.editor.chatArea = new ChatArea();
    this.editor.chatArea.title = 'Chat';
    this.editor = cloneDeep(this.editor);
    this.dummyDataService.addEvent(this.editor);
    this.router.navigateByUrl('events');
  }

}
