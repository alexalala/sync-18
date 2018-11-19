import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../events.models';
import { DummyDataService } from '../../../services/dummy-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  constructor(
    public dummyDataService: DummyDataService,
    public router: Router,
  ) {
  }

  ngOnInit() {

  }

  pushEvent () {
    this.router.navigateByUrl(`events/view/${this.event.id}`);
  }

}
