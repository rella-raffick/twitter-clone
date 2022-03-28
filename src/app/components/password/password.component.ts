import { LoginModel } from './../../../LoginModel';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  storage:Storage=localStorage;

  @Input('theList')theList:any[]=[];
  constructor(private location:Location) { }
  ngOnInit(): void {
  }
  userModel = new LoginModel('','');
 goBack(){
    this.location.back();
  }

}
