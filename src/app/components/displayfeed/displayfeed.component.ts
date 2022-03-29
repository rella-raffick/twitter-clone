import { DoCheck } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { Tweet } from 'src/app/interfaces/tweet';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-displayfeed',
  templateUrl: './displayfeed.component.html',
  styleUrls: ['./displayfeed.component.scss']
})
export class DisplayfeedComponent implements OnInit {

  mediasrc:string;
  mediaFormat:string;
  constructor(private userService: UserService) { }

  users: Profile[] = this.userService.getUsers();
  likedTweet: any[] = this.users[0].likedtweet;
  tweetLikes: any[] = this.userService.getTweetLikes();

  arrayRetweet: any[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.tweetLikes = this.userService.getTweetLikes();
  }

  viewMediaFunction(src:string,format:string){
    this.mediasrc=src;
    this.mediaFormat=format;
  }

  increaseReplyCount(id: number) {
    // if (this.replyBool == false) {
    //   this.users[id].tweet[0].reply += 1
    //   this.replyBool = true;
    //   this.arrayReply[id] = true;
    // }
    // else {
    //   this.users[id].tweet[0].reply -= 1
    //   this.replyBool = false;
    //   this.arrayReply[id] = false;
    // }
  }
  increaseRetweetCount(id: number) {
    // if (this.retweetBool == false) {
    //   this.users[id].tweet[0].retweet += 1;
    //   this.retweetBool = true;
    //   this.arrayRetweet[id] = true;
    // }
    // else {
    //   this.users[id].tweet[0].retweet -= 1;
    //   this.retweetBool = false;
    //   this.arrayRetweet[id] = false;
    // }
  }
  increaseLikesCount(ind1: number, ind2: number) {
    if (this.tweetLikes[ind1][ind2] == false) {
      this.users[ind1].tweet[ind2].likes += 1;
      this.likedTweet.push((ind1+1).toString()+" "+(ind2+1).toString());
      this.tweetLikes[ind1][ind2] = true;
    }
    else {
      this.users[ind1].tweet[ind2].likes -= 1;
      this.tweetLikes[ind1][ind2] = false;
    }
  }

  click: boolean = true;
  onKey(event: KeyboardEvent) {
    this.click = (event.target as HTMLInputElement).value === '' ? true : false;
  }
  onButtonClick() {
    this.click = !this.click;
  }

  mediaBtn = false;
  isClicked = false;
  OnClick() {
    this.isClicked = true;
  }

  newtweet: Tweet;
  tweettext = '';
  urls: any[] = [];
  format: any[] = [];
  filetype = "image/*, video/*";

  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format.push('image');
        this.filetype = "image/*";
      } else if (file.type.indexOf('video') > -1) {
        this.format.push('video');
        this.mediaBtn = true;
        this.filetype = "video/*";
      }
      if (this.format.length == 2) {
        this.mediaBtn = true;
      }
      reader.onload = (event) => {
        this.urls.push((<FileReader>event.target).result);
        if (this.urls.length != 0 || this.tweettext.length != 0) this.click = false;
        else this.click = true;
      }
    }
  }

  selectFiletype() {
    if (this.urls.length == 0) {
      this.filetype = "image/*, video/*";
    }
  }

  removeMedia(index: number) {
    this.format.splice(index, 1);
    this.urls.splice(index, 1);
    this.mediaBtn = false;
    if (this.urls.length != 0 || this.tweettext.length != 0) this.click = false;
    else this.click = true;
  }

  clear() {
    this.tweettext = '';
    this.urls = [];
    this.format = [];
    this.mediaBtn = false;
    this.click = true;
  }

  addTweet() {
    this.newtweet = {} as Tweet;
    let date: Date = new Date();
    this.newtweet.tweetid = 2;
    this.newtweet.tweetcontent = this.tweettext;
    this.newtweet.time = date.toString();
    this.newtweet.retweet = 0;
    this.newtweet.reply = 0;
    this.newtweet.media = this.urls;
    this.newtweet.likes = 0;
    this.newtweet.date = date.toString();
    this.newtweet.format = this.format;
    console.log(this.newtweet.media[0]);
    this.userService.addNewTweet(this.newtweet);
    this.tweettext = '';
    this.urls = [];
    this.format = [];
    this.mediaBtn = false;
    this.click = true;
  }
}
