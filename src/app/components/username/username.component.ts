import { Location } from '@angular/common';
import { LoginModel } from './../../../LoginModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor(private location: Location) { }

  theList: any[]=[];

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }



  userModel = new LoginModel('','');

}
