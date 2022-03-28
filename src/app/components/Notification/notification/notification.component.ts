import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  value:string | null | undefined;
  module:string | null | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router ) { 
  }

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

}
