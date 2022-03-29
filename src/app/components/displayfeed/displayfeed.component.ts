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
  retweetedTweet: any[] = this.users[0].retweetedtweet;

  tweetLikes: any[] = this.userService.getTweetLikes();
  tweetRetweet: any[] = this.userService.getTweetRetweet();

  retweetMessage: any[] = this.userService.getProfileRetweet();

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.tweetLikes = this.userService.getTweetLikes();
    this.tweetRetweet = this.userService.getTweetRetweet();
    this.retweetMessage = this.userService.getProfileRetweet();
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
  
  increaseRetweetCount(ind1: number, ind2: number) {
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
    console.log(this.tweetRetweet);
  }
  increaseLikesCount(ind1: number, ind2: number) {
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
    console.log(this.likedTweet);
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
    this.newtweet.tweetid = this.users[0].tweet.length+1;
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

  replyTweet() {
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
