import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navigate: Router, private user: UserService) { }

  chats: number[] = [1, 2]

  users: any[] = []

  paramId: string = '';

  ngOnInit(): void {
    this.users = this.user.getUsers()
  }

  getActivatedId(id: any) {
    if (id.route) {
      this.paramId = id.route.params._value.id
    } else {
      this.paramId = ''
    }
  }

  chatBoxNavigate() {
    this.navigate.navigate(['/messaging/message/1'])
  }

  navigateHome() {
    this.navigate.navigate(['/home'])
  }

  navigateNotification() {
    this.navigate.navigate(['/notification'])
  }
  navigateMessage() {
    this.navigate.navigate(['/messaging/message'])
  }
  navigateProfile() {
    this.navigate.navigate(['/profile'])
  }
  navigateExplore() {
    this.navigate.navigate(['/explore'])
  }

}
