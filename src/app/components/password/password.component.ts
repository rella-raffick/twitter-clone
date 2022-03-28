import { LoginModel } from './../../../LoginModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  storage:Storage=localStorage;

  @Input('theList')theList:any[]=[];
  constructor() { }
  ngOnInit(): void {
  }
  userModel = new LoginModel('','');


}
