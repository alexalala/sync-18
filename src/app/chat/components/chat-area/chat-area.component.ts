import { Component, OnInit, Input } from '@angular/core';
import { ChatArea } from '../../../event/events.models';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  @Input() chatArea: ChatArea;

  constructor() { }

  ngOnInit() {
  }

}
