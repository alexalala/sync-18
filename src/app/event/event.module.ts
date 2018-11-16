import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { SharedModule } from '../shared/shared.module';
import { EventSummaryComponent } from './components/event-summary/event-summary.component';
import { ChatModule } from '../chat/chat.module';
import { AddEventComponent } from './components/add-event/add-event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ChatModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsComponent
      },
      {
        path: ':id',
        component: EventSummaryComponent
      },
      {
        path: 'filters',
        component: EventFiltersComponent
      },
      {
        path: 'add',
        component: AddEventComponent
      },
    ])
  ],
  declarations: [
    EventComponent,
    EventsComponent,
    EventFiltersComponent,
    EventSummaryComponent,
    AddEventComponent,
  ]
})
export class EventModule { }
