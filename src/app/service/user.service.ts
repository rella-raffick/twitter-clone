import { Injectable } from '@angular/core';
import { Profile } from '../data/profile';
import Users from '../data/profile.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: Profile[] = Users; 
  
  getUsers() {
    return this.users;
  }
}
