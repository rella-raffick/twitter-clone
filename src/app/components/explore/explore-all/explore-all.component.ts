import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-all',
  templateUrl: './explore-all.component.html',
  styleUrls: ['./explore-all.component.scss']
})
export class ExploreAllComponent implements OnInit {

  constructor(private router: Router) { }

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


}
