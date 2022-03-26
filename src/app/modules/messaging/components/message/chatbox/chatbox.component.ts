import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  id: any = '';

  constructor(private route: ActivatedRoute) { }

  @Output() activateId = new EventEmitter<string>();

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms) => {
      this.id = parms.get('id');
      this.activateId.emit(this.id);
    })
  }

}
