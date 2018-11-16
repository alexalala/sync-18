import { Component, OnInit } from '@angular/core';
import { Event } from '../../events.models';
import { DummyDataService } from '../../../services/dummy-data.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  editor: Event;

  constructor(
    public dummyDataService: DummyDataService
  ) {

  }

  ngOnInit() {

  }

  submit() {

    this.dummyDataService.addEvent(this.editor);
  }

}
