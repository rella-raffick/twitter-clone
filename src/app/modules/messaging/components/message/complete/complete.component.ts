import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navigate: Router) { }

  chats: number[] = [1, 2]

  paramId: string = '';

  ngOnInit(): void {
  }

  getActivatedId(id: any) {
    if (id.route) {
      this.paramId = id.route.params._value.id
    } else {
      this.paramId = ''
    }
  }

  chatBoxNavigate() {
    this.navigate.navigate(['/messaging/message/1'])
  }

  navigateHome() {
    this.navigate.navigate(['/home'])
  }

  navigateNotification() {
    this.navigate.navigate(['/notification'])
  }
  navigateMessage() {
    this.navigate.navigate(['/messaging/message'])
  }
  navigateProfile() {
    this.navigate.navigate(['/profile'])
  }

}
