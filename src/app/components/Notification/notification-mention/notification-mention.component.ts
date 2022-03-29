import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notification-mention',
  templateUrl: './notification-mention.component.html',
  styleUrls: ['./notification-mention.component.scss']
})
export class NotificationMentionComponent implements OnInit {

  array:any[] = [
                  {
                  "profilelogo": "https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
                  "username": "lilly_01",
                  "profilename": "Lilly", 
                  "tweet" : "Former President Donald Trump has withdrawn his endorsement of Mo Brooks for the US Senate seat in Alabama",
                  "reply": 11,
                  "retweet": 19, 
                  "likes": 75,
                  "replystatus" : false,
                  "retweetstatus" : false,
                  "likesstatus" : false,
                  "retweetvalue" : "Retweet",
                  "time" : 7,

                },
 
                  {
                    "profilelogo": "https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
                    "username": "lilly_01",
                    "profilename": "Lilly", 
                    "reply": 1,
                  "retweet": 15,
                  "likes": 96,
                  "tweet" : "We were on a break!",
                  "replystatus" : false,
                  "retweetstatus" : false,
                  "likesstatus" : false,
                  "retweetvalue" : "Retweet",
                  "time" : 10,
                }
                ];
  arrayReply:boolean = false;
  arrayRetweet:boolean=false;
  arrayLikes:boolean=false;
  like:number = 21;
  retweet :string ="Retweet";
  users: any[] = [];
  constructor(private userService : UserService ) {

   }

   ngOnInit(): void {
    this.users = this.userService.getUsers();
  }


  increaseReplyCount(i : number){
      this.array[i].replystatus = !this.array[i].replystatus;
  }
  increaseRetweetCount(i : number){
     this.array[i].retweet =  this.array[i].retweet + 1;
      if(this.array[i].retweetstatus === false)
      {
      this.array[i].retweetvalue = "Undo Retweet";
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




}
