import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  constructor(private location: Location,private service : UserService) { }
  user :any[] = [];
  tweetCount:number=0;
  ngOnInit(): void {
    this.user = this.service.getUsers();
    this.tweetCount=this.user[0].tweet.length;
  }

  backNavigate() {
    this.location.back();
  }

}
