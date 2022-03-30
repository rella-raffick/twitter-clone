import { Component, OnInit } from '@angular/core';
import { liketweet } from 'src/app/interfaces/liketweet';
import { Profile } from 'src/app/interfaces/profile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-likes',
  templateUrl: './profile-likes.component.html',
  styleUrls: ['./profile-likes.component.scss']
})
export class ProfileLikesComponent implements OnInit {

  users: Profile[] = this.userService.getUsers();
  
  constructor(private userService: UserService) { 
    this.users = this.userService.getUsers();
    this.tweetLikes = this.userService.getTweetLikes();
    this.tweetRetweet = this.userService.getTweetRetweet();
    this.profilelike = this.userService.getProfileLikes();
  }
  
  ngOnInit(): void {
  }

  likedTweet: any[] = this.users[0].likedtweet;
  retweetedTweet: any[] = this.users[0].retweetedtweet;

  tweetLikes: any[] = this.userService.getTweetLikes();
  tweetRetweet: any[] = this.userService.getTweetRetweet();

  profilelike : liketweet[] = [];

  increaseRetweetCount(ind1: number, ind2: number, ind3: number) {
    if (this.tweetRetweet[ind1][ind2] == false) {
      this.users[ind1].tweet[ind2].retweet += 1;
      this.retweetedTweet.push((ind1+1).toString()+" "+(ind2+1).toString());
      this.tweetRetweet[ind1][ind2] = true;
    }
    else {
      this.users[ind1].tweet[ind2].retweet -= 1;
      this.retweetedTweet.splice(this.users[0].retweetedtweet.indexOf((ind1+1).toString()+" "+(ind2+1).toString()),1);
      this.tweetRetweet[ind1][ind2] = false;
    }
    this.profilelike[ind3].retweet = this.users[ind1].tweet[ind2].retweet;
    console.log(this.tweetRetweet);
  }
  increaseLikesCount(ind1: number, ind2: number, ind3: number) {
    if (this.tweetLikes[ind1][ind2] == false) {
      this.users[ind1].tweet[ind2].likes += 1;
      this.likedTweet.push((ind1+1).toString()+" "+(ind2+1).toString());
      this.tweetLikes[ind1][ind2] = true;
    }
    else {
      this.users[ind1].tweet[ind2].likes -= 1;
      this.likedTweet.splice(this.users[0].likedtweet.indexOf((ind1+1).toString()+" "+(ind2+1).toString()),1);
      this.tweetLikes[ind1][ind2] = false;
    }
    this.profilelike[ind3].likes = this.users[ind1].tweet[ind2].likes;
    console.log(this.likedTweet);
  }

// increaseReplyCount(i : number){
// this.array[i].replystatus = !this.array[i].replystatus;
// }
// increaseRetweetCount(i : number){
// this.array[i].retweet =  this.array[i].retweet + 1;
// if(this.array[i].retweetstatus === false)
// {
// this.array[i].retweetvalue = "undo Retweet";
// }
// else{
// this.array[i].retweetvalue ="Retweet";
// }
// this.array[i].retweetstatus = !this.array[i].retweetstatus;
// }
// increaseLikesCount(i :number){
// if(this.array[i].likesstatus === true){
// this.array[i].likes = this.array[i].likes - 1;
// }  
// else{
// this.array[i].likes = this.array[i].likes + 1;
// }
// this.array[i].likesstatus = !this.array[i].likesstatus;


// }
mediasrc:string;
mediaFormat:string;
viewMediaFunction(src:string,format:string){
  this.mediasrc=src;
  this.mediaFormat=format;
}
}
