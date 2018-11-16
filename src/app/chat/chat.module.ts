import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
  ],
  declarations: [
    ChatAreaComponent,
    CommentComponent
  ],
  exports: [
    ChatAreaComponent,
    CommentComponent
  ]
})
export class ChatModule { }
