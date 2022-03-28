import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss']
})
export class ChatDetailsComponent implements OnInit {

  @Input() specificUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
