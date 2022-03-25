import { Component, OnInit } from '@angular/core';
import Users from '../data/profile.json';
import { Profile } from '../data/profile';

@Component({
  selector: 'app-displayfeed',
  templateUrl: './displayfeed.component.html',
  styleUrls: ['./displayfeed.component.scss']
})
export class DisplayfeedComponent implements OnInit {
  replyBool:boolean=false;
  retweetBool:boolean=false;
  likesBool:boolean=false;
  arrayReply:boolean[]=[];
  arrayRetweet:boolean[]=[];
  arrayLikes:boolean[]=[];
  constructor() { }
  users: Profile[] = Users;
  ngOnInit(): void {
    for(let i=0;i<this.users.length;i++){
      this.arrayReply.push(false);
      this.arrayRetweet.push(false);
      this.arrayLikes.push(false);
      console.log(this.users[i]);
    }
  }
  increaseReplyCount(id:number){
    if(this.replyBool==false){
      this.users[id].tweet[0].reply+=1
      this.replyBool=true;
      this.arrayReply[id]=true;
    }
    else{
      this.users[id].tweet[0].reply-=1
      this.replyBool=false;
      this.arrayReply[id]=false;
    }
    console.log("reply icon pressed");
  }
  increaseRetweetCount(id:number){
    if(this.retweetBool==false){
      this.users[id].tweet[0].retweet+=1;
      this.retweetBool=true;
      this.arrayRetweet[id]=true;
    }
    else{
      this.users[id].tweet[0].retweet-=1;
      this.retweetBool=false;
      this.arrayRetweet[id]=false;
    }
  }
  increaseLikesCount(id:number){
    if(this.likesBool==false){
      this.users[id].tweet[0].likes+=1;
      this.likesBool=true;
      this.arrayLikes[id]=true;
    }
    else{
      this.users[id].tweet[0].likes-=1;
      this.likesBool=false;
      this.arrayLikes[id]=false;
    }
  }
}
