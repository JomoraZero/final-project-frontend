import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserApiService, User} from '../services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  theUser = new User();

  constructor(
    public userThang: UserApiService,
    private routerThang: Router) { }

  ngOnInit() {
  }

  startSignupAjax () {
    this.userThang.postSignup(this.theUser)
    .then(() => {
      this.routerThang.navigate(['/']);
    })
    .catch((err) => {
      alert('Sorry! Something went wrong.');
      console.log(err);
      console.log('Sign up error')
    })
  }

}
