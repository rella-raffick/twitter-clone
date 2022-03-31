import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.userService.isLoading == true) {
      this.loading();
    } else {
      this.afterVisit();
    }
  }

  loading() {
    var complete = window.document.getElementById('complete');
    var ele = window.document.getElementById('loader-wrapper');
    setTimeout(() => {
      ele?.classList.toggle('fade');
      complete?.classList.remove('complete')
      this.userService.loadingChange()
    }, 2000);
  }

  afterVisit() {
    var complete = window.document.getElementById('complete');
    var ele = window.document.getElementById('loader-wrapper');
    ele?.classList.toggle('fade');
    complete?.classList.remove('complete')
  }

}
