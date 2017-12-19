import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {UserApiService} from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (public userThang: UserApiService,
               private routerThang: Router) {}

  ngOnInit () {
    this.userThang.getCheckLogin()
    .catch(() => {
      alert("Sorry! Something went wrong.");
    })
  }

  startLogOutAjax () {
    this.userThang.logout()
    .then(() => {
      this.routerThang.navigate(['/']);
    })
    .catch(() => {
      alert("Sorry! Something went wrong.")
    })
  }
}
