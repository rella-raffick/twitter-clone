import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-nav',
  templateUrl: './notification-nav.component.html',
  styleUrls: ['./notification-nav.component.scss']
})
export class NotificationNavComponent implements OnInit {

  active : string = "all";
  classStatus : Boolean = true ;
  classMention: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  stylePending = {
    marginTop: '10px',
    backgroundColor: 'rgb(255, 46, 88)',
    borderRadius: '15px',
    padding: '10px',
  }

  style = {
    marginTop: '10px',
    borderRadius: '15px',
    padding: '10px',
  }

  allstate(){
    console.log("inside all");
    this.classMention = false;
    this.classStatus = true;
    this.active = "all";
  }

  mentionstate(){
    console.log("inside mention");
    this.classStatus = false;
    this.classMention = true;
    this.active = "mention";
  }
}
