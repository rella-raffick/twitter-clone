import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-tweet',
  templateUrl: './profile-tweet.component.html',
  styleUrls: ['./profile-tweet.component.scss']
})
export class ProfileTweetComponent implements OnInit {
  
  users: Profile[] = this.service.getUsers();

  mediasrc:string;
  mediaFormat:string;
  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();
    this.tweetLikes = this.service.getTweetLikes();
    this.tweetRetweet = this.service.getTweetRetweet();
  }

  likedTweet: any[] = this.users[0].likedtweet;
  retweetedTweet: any[] = this.users[0].retweetedtweet;

  tweetLikes: any[] = this.service.getTweetLikes();
  tweetRetweet: any[] = this.service.getTweetRetweet();

  increaseReplyCount(id: number) {
    // if (this.replyBool == false) {
    //   this.user[id].tweet[0].reply += 1
    //   this.replyBool = true;
    //   this.arrayReply[id] = true;
    // }
    // else {
    //   this.user[id].tweet[0].reply -= 1
    //   this.replyBool = false;
    //   this.arrayReply[id] = false;
    // }

  }

  increaseRetweetCount(ind: number) {
    if (this.tweetRetweet[0][ind] == false) {
      this.users[0].tweet[ind].retweet += 1;
      this.retweetedTweet.push((1).toString()+" "+(ind+1).toString());
      this.tweetRetweet[0][ind] = true;
    }
    else {
      this.users[0].tweet[ind].retweet -= 1;
      this.retweetedTweet.splice(this.users[0].retweetedtweet.indexOf((1).toString()+" "+(ind+1).toString()),1);
      this.tweetRetweet[0][ind] = false;
    }
  }
  increaseLikesCount(ind: number) {
    if (this.tweetLikes[0][ind] == false) {
      this.users[0].tweet[ind].likes += 1;
      this.likedTweet.push((1).toString()+" "+(ind+1).toString());
      this.tweetLikes[0][ind] = true;
    }
    else {
      this.users[0].tweet[ind].likes -= 1;
      this.likedTweet.splice(this.users[0].likedtweet.indexOf((1).toString()+" "+(ind+1).toString()),1);
      this.tweetLikes[0][ind] = false;
    }
  }

  // increaseRetweetCount(id: number) {
  //   if (this.retweetBool == false) {
  //     this.user[id].tweet[0].retweet += 1;
  //     this.retweetBool = true;
  //     this.arrayRetweet[id] = true;
  //   }
  //   else {
  //     this.user[id].tweet[0].retweet -= 1;
  //     this.retweetBool = false;
  //     this.arrayRetweet[id] = false;
  //   }
  // }
  // increaseLikesCount(id: number) {
  //   if (this.likesBool == false) {
  //     this.user[id].tweet[0].likes += 1;
  //     this.likesBool = true;
  //     this.arrayLikes[id] = true;
  //   }
  //   else {
  //     this.user[id].tweet[0].likes -= 1;
  //     this.likesBool = false;
  //     this.arrayLikes[id] = false;
  //   }
  // }


  viewMediaFunction(src:string,format:string){
    this.mediasrc=src;
    this.mediaFormat=format;
  }


}
