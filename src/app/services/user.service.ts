import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import Users from 'src/assets/profile.json';
import { Tweet } from '../interfaces/tweet';
import { liketweet } from '../interfaces/liketweet';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoading: boolean = true;

  loadingChange() {
    this.isLoading = false;
  }

  getTweetLikes(): any[] {
    this.arrayLikes = [];
    for (let i = 0; i < this.users.length; i++) {
      this.arrayLikes.push([]);
      for(let j = 0; j < this.users[i].tweet.length; j++) {
        if(this.users[0].likedtweet.indexOf((i+1).toString()+" "+(j+1).toString())<0) {
          this.arrayLikes[i].push(false);
        }
        else {
          this.arrayLikes[i].push(true);
        }
      }
    }
    return this.arrayLikes;
  }

  getTweetRetweet(): any[] {
    this.arrayRetweet = [];
    for (let i = 0; i < this.users.length; i++) {
      this.arrayRetweet.push([]);
      for(let j = 0; j < this.users[i].tweet.length; j++) {
        if(this.users[0].retweetedtweet.indexOf((i+1).toString()+" "+(j+1).toString())<0) {
          this.arrayRetweet[i].push(false);
        }
        else {
          this.arrayRetweet[i].push(true);
        }
      }
    }
    console.log(this.arrayRetweet);
    return this.arrayRetweet;
  }

  getProfileLikes() {
    this.profileLikes = [];
    this.arrayLikes = this.getTweetLikes();
    for(let i=0; i<this.arrayLikes.length; i++) {
      for(let j=0; j<this.arrayLikes[i].length; j++) {
        if(this.arrayLikes[i][j]==true){
          this.profileLikes.push({
            uid: i,
            tid: j,
            profilelogo : this.users[i].profilelogo,
            username : this.users[i].username,
            profilename: this.users[i].profilename,
            tweetcontent : this.users[i].tweet[j].tweetcontent,
            media: this.users[i].tweet[j].media,
            format: this.users[i].tweet[j].format,
            date: this.users[i].tweet[j].date,
            time: this.users[i].tweet[j].time,
            reply: this.users[i].tweet[j].reply,
            retweet: this.users[i].tweet[j].retweet,
            likes: this.users[i].tweet[j].likes,
            messages: this.users[i].messages
          })
          
        }
          // this.profileLikes.push([this.users[i],this.users[i].tweet[j]]);
      }
    }
    // console.log(this.profileLikes);
    return this.profileLikes;
  }

  getProfileRetweet(): any[] {
    this.profileRetweet = [];
    this.arrayRetweet = this.getTweetRetweet();
    for(let i=0; i<this.arrayRetweet.length; i++) {
      for(let j=0; j<this.arrayRetweet[i].length; j++) {
        if(this.arrayRetweet[i][j]==true) {
          this.profileRetweet.push({
            uid: i,
            tid: j,
            profilelogo : this.users[i].profilelogo,
            username : this.users[i].username,
            profilename: this.users[i].profilename,
            tweetcontent : this.users[i].tweet[j].tweetcontent,
            media: this.users[i].tweet[j].media,
            format: this.users[i].tweet[j].format,
            date: this.users[i].tweet[j].date,
            time: this.users[i].tweet[j].time,
            reply: this.users[i].tweet[j].reply,
            retweet: this.users[i].tweet[j].retweet,
            likes: this.users[i].tweet[j].likes,
            messages: this.users[i].messages
          })
        }
          // this.profileRetweet.push([this.users[i],this.users[i].tweet[j]]);
      }
    }
    return this.profileRetweet;
  }

  addNewTweet(newtweet: any) {
    this.arrayLikes[0].unshift(false);
    this.arrayRetweet[0].unshift(false);
    this.users[0].tweet.unshift(newtweet);
  }
  replyTweet() {
    this.users[0].tweet[2].reply++; 
  }
  constructor() { }

  users: Profile[] = Users; 
  arrayLikes: any[] = [];
  arrayRetweet: any[] =[];
  profileLikes: liketweet[] = [];
  profileRetweet: liketweet[] = [];
  allRetweet: any[] = [];

  getUsers() {
    return this.users;
  }
}
