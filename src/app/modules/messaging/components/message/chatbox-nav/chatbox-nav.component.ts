import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbox-nav',
  templateUrl: './chatbox-nav.component.html',
  styleUrls: ['./chatbox-nav.component.scss']
})
export class ChatboxNavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backNavigate() {
    this.route.navigate(['/messaging/message'])
  }

}
