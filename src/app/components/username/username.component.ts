import { LoginModel } from './../../../LoginModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  theList: any[]=[];

  ngOnInit(): void {
  }

  addUsername(username:string){
    this.theList.push({username:username});
  }



  userModel = new LoginModel('','');

}
