import { Component, OnInit } from '@angular/core';
import { User } from '../../../event/events.models';
import { DummyDataService } from '../../../services/dummy-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public dummyDataService: DummyDataService,
  ) { }

  ngOnInit() {

  }
}
