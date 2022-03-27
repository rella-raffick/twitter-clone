import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: Profile[] = this.userService.getUsers();
  ngOnInit(): void {
  }

}
