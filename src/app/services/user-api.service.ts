import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {environment} from '../../environments/environment';

export class User {
  //signup form
  fullName: string;

  //signup & login form
  username: string;
  password: string;

  //database
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class UserApiService {

  currentUser: User;

    constructor(private httpThang: HttpClient) { }

    postSignup(userInfo: User) {
      return this.httpThang.post(
        `${environment.backendUrl}/api/signup`,
        userInfo,
        {withCredentials: true}
      ).toPromise()
      .then((apiResult: any) => {
        this.currentUser = apiResult.userInfo;

        return apiResult;
      });
    }

    postLogin(userInfo: User) {
      return this.httpThang.post(
        `${environment.backendUrl}/api/login`,
        userInfo,
        {withCredentials: true}
      ).toPromise()
      .then((apiResult: any) => {
        this.currentUser = apiResult.userInfo;

        return apiResult;
      });
    }

    getCheckLogin() {
      return this.httpThang.get(
        `${environment.backendUrl}/api/checklogin`,
        {withCredentials: true}
      )
      .toPromise()
      .then((apiResult: any) => {
        this.currentUser = apiResult.userInfo;

        return apiResult;
      });
    }

    logout() {
      return this.httpThang.delete(
        `${environment.backendUrl}/api/logout`,
        {withCredentials: true}
      )
      .toPromise()
      .then((apiResult) => {
        this.currentUser = null;

        return apiResult;
      })
    }

}
