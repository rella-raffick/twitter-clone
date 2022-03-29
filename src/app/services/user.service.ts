import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import Users from 'src/assets/profile.json';
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getTweetLikes(): any[] {
    this.arrayLikes = [];
    for (let i = 0; i < this.users.length; i++) {
      this.arrayLikes.push([]);
      for(let j = 0; j < this.users[i].tweet.length; j++) {
        //console.log(i+" "+j+" "+this.users[0].likedtweet.indexOf((i+1).toString()+" "+(j+1).toString()));
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
  addNewTweet(newtweet: any) {
    this.arrayLikes[0].unshift(false);
    this.users[0].tweet.unshift(newtweet);
  }
  replyTweet() {
    this.users[0].tweet[2].reply++; 
  }
  constructor() { }

  users: Profile[] = Users; 
  arrayLikes: any[] = [];
  arrayRetweet: any[] =[];

  getUsers() {
    return this.users;
  }
}
