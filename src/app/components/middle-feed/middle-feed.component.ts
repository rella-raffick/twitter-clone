import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-middle-feed',
  templateUrl: './middle-feed.component.html',
  styleUrls: ['./middle-feed.component.scss']
})
export class MiddleFeedComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: Profile[] = this.userService.getUsers();
  ngOnInit(): void {
  }

}
