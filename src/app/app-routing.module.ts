import { CompleteComponent } from './components/message/complete/complete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/Notification/notification/notification.component'

const routes: Routes = [
  { path: '', redirectTo: 'message', pathMatch: 'full' },
  { path: 'message', component: CompleteComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'notification/mentions', component: NotificationComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
