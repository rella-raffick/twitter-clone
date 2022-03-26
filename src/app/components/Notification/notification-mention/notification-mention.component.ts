import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-mention',
  templateUrl: './notification-mention.component.html',
  styleUrls: ['./notification-mention.component.scss']
})
export class NotificationMentionComponent implements OnInit {

  arrayReply:boolean = false;
  arrayRetweet:boolean=false;
  arrayLikes:boolean=false;
  like:number = 21;
  retweet :string ="Retweet";
  constructor() { }

  ngOnInit(): void {
  }

  increaseReplyCount(){
      this.arrayReply = !this.arrayReply;
  }
  increaseRetweetCount(){
      this.arrayRetweet = !this.arrayRetweet;
      if(this.retweet === "Retweet"){
      this.retweet = "undo Retweet";
      }
      else{
        this.retweet ="Retweet";
      }
  }
  increaseLikesCount(){
    if(this.arrayLikes === true){
        this.like = this.like - 1;
    }  
    else{
      this.like = this.like + 1;
    }
    this.arrayLikes = !this.arrayLikes;
      
      
  }




}
