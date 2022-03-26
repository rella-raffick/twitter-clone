import { MsgsearchbarComponent } from './components/message/msgsearchbar/msgsearchbar.component';
import { MsgnavbarComponent } from './components/message/msgnavbar/msgnavbar.component';
import { ChatsComponent } from './components/message/chats/chats.component';
import { CompleteComponent } from './components/message/complete/complete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';
import { ChatboxComponent } from './components/message/chatbox/chatbox.component';
import { NewChatboxComponent } from './components/message/new-chatbox/new-chatbox.component';
import { ChatboxNavComponent } from './components/message/chatbox-nav/chatbox-nav.component';
import { ChatDetailsComponent } from './components/message/chat-details/chat-details.component';
import { ChatboxTextComponent } from './components/message/chatbox-text/chatbox-text.component';
import { ChatboxInputComponent } from './components/message/chatbox-input/chatbox-input.component';


@NgModule({
  declarations: [
    CompleteComponent,
    ChatsComponent,
    MsgnavbarComponent,
    MsgsearchbarComponent,
    ChatboxComponent,
    NewChatboxComponent,
    ChatboxNavComponent,
    ChatDetailsComponent,
    ChatboxTextComponent,
    ChatboxInputComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule
  ]
})
export class MessagingModule { }
