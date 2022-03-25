import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompleteComponent } from './components/message/complete/complete.component';
import { MsgnavbarComponent } from './components/message/msgnavbar/msgnavbar.component';
import { MsgsearchbarComponent } from './components/message/msgsearchbar/msgsearchbar.component';
import { ChatsComponent } from './components/message/chats/chats.component';


@NgModule({
  declarations: [
    AppComponent,
    CompleteComponent,
    MsgnavbarComponent,
    MsgsearchbarComponent,
    ChatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
