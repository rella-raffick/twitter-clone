import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import Users from 'src/assets/profile.json';

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
