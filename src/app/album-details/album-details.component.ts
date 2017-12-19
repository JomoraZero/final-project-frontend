import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PostApiService, Post} from '../services/post-api.service';
import {UserApiService, User} from '../services/user-api.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  postInfo: Post = new Post();
  userInfo: User = new User();

  constructor(
      private postThang: PostApiService,
      public userThang: UserApiService,
      private activatedThang: ActivatedRoute,
      private routerThang: Router
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myReqParams) => {
      console.log(myReqParams.id);

      this.startAjaxCall(myReqParams.id);
    })
  }

  startAjaxCall(urlId) {
    this.postThang.getOnePost(urlId)
    .then((postResults: Post) => {
      this.postInfo = postResults;
      console.log(this.postInfo);

    })
    .catch((err) => {
      alert("Sorry! Something went wrong.");
      console.log("Post details error");
      console.log(err);
    });
  }

  addUserFavorites() {
    console.log(this.postInfo._id);


    this.userThang.addUserFavorites(this.postInfo._id)
    .then((postResults: User) => {

      this.userInfo = postResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Add Album to Favorites Error!")
      console.log(err)
    })
  }

  deleteUserFavorites() {
    console.log(this.postInfo._id);

    this.userThang.deleteUserFavorites(this.postInfo._id)
    .then((postResults: User) => {

      this.userInfo = postResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Remove Album from Favorites Error!")
      console.log(err)
    })
  }


}
