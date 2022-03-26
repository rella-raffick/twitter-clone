import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/Notification/notification/notification.component';

const routes: Routes = [
   { path: 'home', component:HomeComponent},
  { path: 'notification', component: NotificationComponent },
  { path: 'notification/mentions', component: NotificationComponent },
  {
    path: 'messaging', loadChildren: () => import('./modules/messaging/messaging.module')
      .then(m => m.MessagingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
