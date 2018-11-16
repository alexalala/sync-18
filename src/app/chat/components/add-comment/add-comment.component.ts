import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../event/events.models';
import { DummyDataService } from '../../../services/dummy-data.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input() eventId: number;
  commentEditor: Message = new Message();

  constructor(
    public dummyDataService: DummyDataService,
  ) { }

  ngOnInit() {
  }

  submit () {
    const editor = cloneDeep(this.commentEditor);
    editor.username = 'Jake';
    editor.imageUrl = 'assets/image-1.jpg';
    this.dummyDataService.addMessage(this.eventId, editor);
  }
}
