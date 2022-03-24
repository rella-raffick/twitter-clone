import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
