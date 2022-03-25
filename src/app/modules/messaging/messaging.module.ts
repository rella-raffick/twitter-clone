import { MsgsearchbarComponent } from './components/message/msgsearchbar/msgsearchbar.component';
import { MsgnavbarComponent } from './components/message/msgnavbar/msgnavbar.component';
import { ChatsComponent } from './components/message/chats/chats.component';
import { CompleteComponent } from './components/message/complete/complete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';


@NgModule({
  declarations: [
    CompleteComponent,
    ChatsComponent,
    MsgnavbarComponent,
    MsgsearchbarComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule
  ]
})
export class MessagingModule { }
