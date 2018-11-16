import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../../services/dummy-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(
    public dummyDataService: DummyDataService
    ) {

    }

  ngOnInit() {
  }

}
