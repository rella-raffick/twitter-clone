import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MiddleFeedComponent } from './components/middle-feed/middle-feed.component';
import { WhatsHappeningComponent } from './components/whats-happening/whats-happening.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MiddleFeedComponent,
    WhatsHappeningComponent
import { NewtweetComponent } from './components/newtweet/newtweet.component';
import { DisplayfeedComponent } from './components/displayfeed/displayfeed.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NewtweetComponent,
    DisplayfeedComponent
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
