import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../../../services/dummy-data.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    public dummyDataService: DummyDataService,
    public router: Router,
    ) {

    }

  ngOnInit() {

  }

  addEvent () {
    this.router.navigateByUrl(`events/add`);
  }

}
