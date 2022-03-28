import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatbox-text',
  templateUrl: './chatbox-text.component.html',
  styleUrls: ['./chatbox-text.component.scss']
})
export class ChatboxTextComponent implements OnInit {

  constructor() { }

  @Input() specificUser: any;

  ngOnInit(): void {
  }

}
