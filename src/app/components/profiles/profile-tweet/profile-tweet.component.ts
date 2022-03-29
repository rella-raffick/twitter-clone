import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-tweet',
  templateUrl: './profile-tweet.component.html',
  styleUrls: ['./profile-tweet.component.scss']
})
export class ProfileTweetComponent implements OnInit {
  replyBool: boolean = false;
  retweetBool: boolean = false;
  likesBool: boolean = false;
  arrayReply: boolean[] = [];
  arrayRetweet: boolean[] = [];
  arrayLikes: boolean[] = [];
  user :any[] = [];
  mediasrc:string;
  mediaFormat:string;
  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.user = this.service.getUsers();
    console.log(this.user);
    this.arrayReply.push(false);
      this.arrayRetweet.push(false);
      this.arrayLikes.push(false);

  }

  increaseReplyCount(id: number) {
    if (this.replyBool == false) {
      this.user[id].tweet[0].reply += 1
      this.replyBool = true;
      this.arrayReply[id] = true;
    }
    else {
      this.user[id].tweet[0].reply -= 1
      this.replyBool = false;
      this.arrayReply[id] = false;
    }

  }
  increaseRetweetCount(id: number) {
    if (this.retweetBool == false) {
      this.user[id].tweet[0].retweet += 1;
      this.retweetBool = true;
      this.arrayRetweet[id] = true;
    }
    else {
      this.user[id].tweet[0].retweet -= 1;
      this.retweetBool = false;
      this.arrayRetweet[id] = false;
    }
  }
  increaseLikesCount(id: number) {
    if (this.likesBool == false) {
      this.user[id].tweet[0].likes += 1;
      this.likesBool = true;
      this.arrayLikes[id] = true;
    }
    else {
      this.user[id].tweet[0].likes -= 1;
      this.likesBool = false;
      this.arrayLikes[id] = false;
    }
  }


  viewMediaFunction(src:string,format:string){
    this.mediasrc=src;
    this.mediaFormat=format;
  }


}
