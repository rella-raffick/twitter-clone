import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';
<<<<<<< HEAD

=======
>>>>>>> e3d5d71e5b8b03fe7cca9cc26866bd8e931cb8de
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private userService: UserService) { }
<<<<<<< HEAD

=======
  users: Profile[] = this.userService.getUsers();
>>>>>>> e3d5d71e5b8b03fe7cca9cc26866bd8e931cb8de
  ngOnInit(): void {
  }

  users: Profile[] = this.userService.getUsers();

}
