import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import Users from 'src/assets/profile.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addNewTweet(newtweet: any) {
    this.users[0].tweet.unshift(newtweet);
  }

  constructor() { }

  users: Profile[] = Users; 
  
  getUsers() {
    return this.users;
  }
}
