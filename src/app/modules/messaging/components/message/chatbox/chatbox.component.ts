import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  id: any = '';

  constructor(private route: ActivatedRoute, private items: UserService) { }

  @Output() activateId = new EventEmitter<string>();

  users: Object[] = [];
  specific: any;

  ngOnInit(): void {
    this.users = this.items.getUsers();
    this.route.paramMap.subscribe((parms) => {
      this.id = parms.get('id');
      this.specific = this.users.filter((data: any, i = 1) => { return data['id'] + '' == this.id })
      this.activateId.emit(this.id);
    })
  }

}
