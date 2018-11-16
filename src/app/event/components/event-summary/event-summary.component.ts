import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../../services/dummy-data.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../events.models';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.scss']
})
export class EventSummaryComponent implements OnInit {

  id: number;
  event: Event;

  constructor(
    public dummyDataService: DummyDataService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = +params.get('id');
      this.event = this.dummyDataService.getById(this.id);
    });
  }

}
