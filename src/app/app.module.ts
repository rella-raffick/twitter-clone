import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './components/Notification/notification/notification.component'
import { NotificationNavComponent } from './components/Notification/notification-nav/notification-nav.component';
import { NotificationAllComponent } from './components/Notification/notification-all/notification-all.component';
import { NotificationMentionComponent } from './components/Notification/notification-mention/notification-mention.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationNavComponent,
    NotificationAllComponent,
    NotificationMentionComponent
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
