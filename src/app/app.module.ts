import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MiddleFeedComponent } from './middle-feed/middle-feed.component';
import { WhatsHappeningComponent } from './whats-happening/whats-happening.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MiddleFeedComponent,
    WhatsHappeningComponent
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
