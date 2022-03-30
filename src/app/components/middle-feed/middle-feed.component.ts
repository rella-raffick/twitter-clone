import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-middle-feed',
  templateUrl: './middle-feed.component.html',
  styleUrls: ['./middle-feed.component.scss']
})
export class MiddleFeedComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  users: Profile[] = this.userService.getUsers();
  ngOnInit(): void {
  }

  navigateHome() {
    this.router.navigate(['/home'])
  }

  navigateNotification() {
    this.router.navigate(['/notification'])
  }
  navigateMessage() {
    this.router.navigate(['/messaging/message'])
  }
  navigateProfile() {
    this.router.navigate(['/profile'])
  }
  navigateExplore() {
    this.router.navigate(['/explore'])
  }


}
