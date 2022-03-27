
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MiddleFeedComponent } from './components/middle-feed/middle-feed.component';
import { WhatsHappeningComponent } from './components/whats-happening/whats-happening.component';
import { NewtweetComponent } from './components/newtweet/newtweet.component';
import { DisplayfeedComponent } from './components/displayfeed/displayfeed.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/Notification/notification/notification.component';
import { NotificationNavComponent } from './components/Notification/notification-nav/notification-nav.component';
import { NotificationMentionComponent } from './components/Notification/notification-mention/notification-mention.component';
import { NotificationAllComponent } from './components/Notification/notification-all/notification-all.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MiddleFeedComponent,
    WhatsHappeningComponent,
    NewtweetComponent,
    DisplayfeedComponent,
    HomeComponent,
    NotificationComponent,
    NotificationNavComponent,
    NotificationMentionComponent,
    NotificationAllComponent
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
