import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  active : string = "tweet";
  classTweet : boolean = true;
  classReply : boolean = false;
  classMedia : boolean = false;
  classLikes: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  tweet(){
    this.classTweet = true;
    this.classReply = false;
    this.classMedia = false;
    this.classLikes = false;
    this.active = "tweet";
  }
  reply(){
    this.classTweet = false;
    this.classReply = true;
    this.classMedia = false;
    this.classLikes = false;
    this.active = "reply";
  }
  media(){
    this.classTweet = false;
    this.classReply = false;
    this.classMedia = true;
    this.classLikes = false;
    this.active = "media";
  }
  likes(){
    this.classTweet = false;
    this.classReply = false;
    this.classMedia = false;
    this.classLikes = true;
    this.active = "likes";
  }
}
