import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   username="";
  phone="";
  month="Month";
  date="Day"; 
  year="Year";
  password="";
  verificationcode="";
 udata:any=[]
  userdata(a: any,b: any,c:any,d:any,e:any){
    this.udata.push({name:a,phone:b,dob:c+" "+d+", "+e})
  }

}
