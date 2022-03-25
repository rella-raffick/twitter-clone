import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  value:string | null | undefined;
  module:string | null | undefined;
  
  constructor(private route: ActivatedRoute ) { 
  }

  ngOnInit(): void {
    
    // this.value = this.route.snapshot.paramMap.get('id');
    // this.route.params.subscribe(value =>{
    //   this.module = this.value;
    //   console.log("module value"+ value);
    // })
  }

}
