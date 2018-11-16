import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsComponent
      },
      {
        path: ':id',
        component: EventComponent
      },
      {
        path: 'filters',
        component: EventFiltersComponent
      },
    ])
  ],
  declarations: [
    EventComponent,
    EventsComponent,
    EventFiltersComponent,
  ]
})
export class EventModule { }
