import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import Users from 'src/assets/profile.json';
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addNewTweet(newtweet: any) {
    this.users[0].tweet.unshift(newtweet);
  }
  replyTweet() {
    this.users[0].tweet[2].reply++; 
  }
  constructor() { }

  users: Profile[] = Users; 
  
  getUsers() {
    return this.users;
  }
}
