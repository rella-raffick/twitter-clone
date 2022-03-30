import { Component, OnInit } from '@angular/core';
import { liketweet } from 'src/app/interfaces/liketweet';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-retweet',
  templateUrl: './profile-retweet.component.html',
  styleUrls: ['./profile-retweet.component.scss']
})
export class ProfileRetweetComponent implements OnInit {

  constructor(private service : UserService) { 
    this.profileretweet = this.service.getProfileRetweet();
  }

  ngOnInit(): void {
  }

  array:any[] = [
    {
    "reply": 11,
    "retweet": 19,
    "likes": 76,
    "replystatus" : false,
    "retweetstatus" : false,
    "likesstatus" : true,
    "retweetvalue" : "Retweet"

  },

    {"reply": 1,
    "retweet": 15,
    "likes": 97,
    "replystatus" : false,
    "retweetstatus" : false,
    "likesstatus" : true,
    "retweetvalue" : "Retweet"
  }
  ];
arrayReply:boolean = false;
arrayRetweet:boolean=false;
arrayLikes:boolean=false;
like:number = 21;
retweet :string ="Retweet";
profileretweet : liketweet[] = [];



increaseReplyCount(i : number){
this.array[i].replystatus = !this.array[i].replystatus;
}
increaseRetweetCount(i : number){
this.array[i].retweet =  this.array[i].retweet + 1;
if(this.array[i].retweetstatus === false)
{
this.array[i].retweetvalue = "undo Retweet";
}
else{
this.array[i].retweetvalue ="Retweet";
}
this.array[i].retweetstatus = !this.array[i].retweetstatus;
}
increaseLikesCount(i :number){
if(this.array[i].likesstatus === true){
this.array[i].likes = this.array[i].likes - 1;
}  
else{
this.array[i].likes = this.array[i].likes + 1;
}
this.array[i].likesstatus = !this.array[i].likesstatus;


}
mediasrc:string;
mediaFormat:string;
viewMediaFunction(src:string,format:string){
  this.mediasrc=src;
  this.mediaFormat=format;
}
}
