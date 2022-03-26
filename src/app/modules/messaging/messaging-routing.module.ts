import { NewChatboxComponent } from './components/message/new-chatbox/new-chatbox.component';
import { ChatboxComponent } from './components/message/chatbox/chatbox.component';
import { CompleteComponent } from './components/message/complete/complete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'message', pathMatch: 'full' },
  {
    path: 'message', component: CompleteComponent,
    children: [
      { path: '', component: NewChatboxComponent },
      { path: ':id', component: ChatboxComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingRoutingModule { }
