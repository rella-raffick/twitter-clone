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
  replyBool:boolean=false;
  retweetBool:boolean=false;
  likesBool:boolean=false;
  arrayReply:boolean[]=[];
  arrayRetweet:boolean[]=[];
  arrayLikes:boolean[]=[];
  constructor(private userService: UserService) { }
  

  users: Profile[] = this.userService.getUsers();

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    for(let i=0;i<this.users.length;i++){
      this.arrayReply.push(false);
      this.arrayRetweet.push(false);
      this.arrayLikes.push(false);
      console.log(this.users[i]);
    }
  }
  increaseReplyCount(id:number){
    if(this.replyBool==false){
      this.users[id].tweet[0].reply+=1
      this.replyBool=true;
      this.arrayReply[id]=true;
    }
    else{
      this.users[id].tweet[0].reply-=1
      this.replyBool=false;
      this.arrayReply[id]=false;
    }
    console.log("reply icon pressed");
  }
  increaseRetweetCount(id:number){
    if(this.retweetBool==false){
      this.users[id].tweet[0].retweet+=1;
      this.retweetBool=true;
      this.arrayRetweet[id]=true;
    }
    else{
      this.users[id].tweet[0].retweet-=1;
      this.retweetBool=false;
      this.arrayRetweet[id]=false;
    }
  }
  increaseLikesCount(id:number){
    if(this.likesBool==false){
      this.users[id].tweet[0].likes+=1;
      this.likesBool=true;
      this.arrayLikes[id]=true;
    }
    else{
      this.users[id].tweet[0].likes-=1;
      this.likesBool=false;
      this.arrayLikes[id]=false;
    }
  }

  click : boolean = true;
  onKey(event: KeyboardEvent) { 
    this.click = (event.target as HTMLInputElement).value === '' ? true:false;
  }
  onButtonClick() {
    this.click = !this.click;
  }

  mediaBtn=false;
  isClicked=false;
  OnClick(){
    this.isClicked=true;
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
      if(file.type.indexOf('image')> -1){
        this.format.push('image');
        this.filetype = "image/*";
      } else if(file.type.indexOf('video')> -1){
        this.format.push('video');
        this.mediaBtn = true;
        this.filetype = "video/*";
      }
      if(this.format.length == 2) {
        this.mediaBtn = true;
      }
      reader.onload = (event) => {
        this.urls.push((<FileReader>event.target).result);
        if(this.urls.length != 0 || this.tweettext.length != 0) this.click = false;
        else this.click = true; 
      }
    }
  }

  selectFiletype() {
    if(this.urls.length == 0) {
      this.filetype = "image/*, video/*";
    }
  }

  removeMedia(index: number) {
    this.format.splice(index,1);
    this.urls.splice(index,1);
    this.mediaBtn = false;
    if(this.urls.length != 0 || this.tweettext.length != 0) this.click = false;
    else this.click = true; 
  }

  addTweet() {
    this.tweettext = '';
    this.urls = [];
    this.format = [];
    this.mediaBtn = false;
    this.click = true;
  }
}
