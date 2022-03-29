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
                  "profilelogo": "https://i.pinimg.com/236x/9a/2b/ea/9a2bea6795661d05cb017f026827751e.jpg",
                  "username": "phoebe_crapbag",
                  "profilename": "Phoebe Buffay", 
                  "tweet" : "If You Want To Receive Emails About My Upcoming Shows, Then Please Give Me Money So I Can Buy A Computer.",
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
                    "profilelogo": "https://i.pinimg.com/236x/9a/2b/ea/9a2bea6795661d05cb017f026827751e.jpg",
                    "username": "phoebe_crapbag",
                    "profilename": "Phoebe Buffay", 
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
