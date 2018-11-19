import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../event/events.models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Message;

  constructor() { }

  ngOnInit() {
  }

}
