import { Component, OnInit } from '@angular/core';
import Users from '../data/profile.json';
import { Profile } from '../data/profile';

@Component({
  selector: 'app-newtweet',
  templateUrl: './newtweet.component.html',
  styleUrls: ['./newtweet.component.scss']
})
export class NewtweetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: Profile[] = Users;  

  isClicked=false;
  OnClick(){
    this.isClicked=true;
  }
}
