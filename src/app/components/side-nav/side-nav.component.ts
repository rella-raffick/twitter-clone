import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { Tweet } from 'src/app/interfaces/tweet';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  users: Profile[] = this.userService.getUsers();
  ngOnInit(): void {
  }

  navigateHome() {
    this.router.navigate(['/home'])
  }

  navigateNotification() {
    this.router.navigate(['/notification'])
  }
  navigateMessage() {
    this.router.navigate(['/messaging/message'])
  }
  navigateProfile() {
    this.router.navigate(['/profile'])
  }
  navigateExplore() {
    this.router.navigate(['/explore'])
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

  msg = "";

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

  click: boolean = true;
  onKey(event: KeyboardEvent) {
    this.click = (event.target as HTMLInputElement).value === '' ? true : false;
  }
}
