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
    private dummyDataService: DummyDataService,
  ) { }

  ngOnInit() {
  }

  submit () {
    let editor = cloneDeep(this.commentEditor);
    this.commentEditor.message = '';
    editor.username = this.dummyDataService.user.name;
    editor.imageUrl = 'assets/image-1.jpg';
    this.dummyDataService.addMessage(this.eventId, editor);

    const random = Math.floor( Math.random() * 6);

    setTimeout(() => {
    if (random === 0) {
      editor = new Message();
      editor.message = `I want you on my team tonight Jake!`;
      editor.username = 'Todd';
      editor.imageUrl = 'assets/image-3.jpg';
      this.dummyDataService.addMessage(this.eventId, editor);
    } else if (random === 1) {
      editor = new Message();
      editor.message = `I think it's going to be good tonight!`;
      editor.username = 'Beth';
      editor.imageUrl = 'assets/image-2.jpg';
      this.dummyDataService.addMessage(this.eventId, editor);
    } else if (random === 2) {
      editor = new Message();
      editor.message = `I'm so going to win tonigt!`;
      editor.username = 'Jim';
      editor.imageUrl = 'assets/image-4.jpg';
      this.dummyDataService.addMessage(this.eventId, editor);
    } else if (random === 3) {
      editor = new Message();
      editor.message = `Why are you spamming the chat Jake?`;
      editor.username = 'Todd';
      editor.imageUrl = 'assets/image-3.jpg';
      this.dummyDataService.addMessage(this.eventId, editor);
    } else if (random === 4) {
      editor = new Message();
      editor.message = `Does anyone think they can beat me?`;
      editor.username = 'Todd';
      editor.imageUrl = 'assets/image-3.jpg';
      this.dummyDataService.addMessage(this.eventId, editor);
      setTimeout(() => {
        editor = new Message();
        editor.message = `I definitely will!`;
        editor.username = 'Jim';
        editor.imageUrl = 'assets/image-4.jpg';
        this.dummyDataService.addMessage(this.eventId, editor);
      }, 800);
    } else if (random === 5) {
      editor = new Message();
      editor.message = `Can I play up-front tonight?`;
      editor.username = 'Beth';
      editor.imageUrl = 'assets/image-2.jpg';
      this.dummyDataService.addMessage(this.eventId, editor);
      setTimeout(() => {
        editor = new Message();
        editor.message = `Yeah, sure, I'll go in goal!`;
        editor.username = 'Jim';
        editor.imageUrl = 'assets/image-4.jpg';
        this.dummyDataService.addMessage(this.eventId, editor);
      }, 800);
    }
  }, 800);
  }
}
