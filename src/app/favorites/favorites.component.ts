import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../services/user-api.service';
import { PostApiService, Post } from '../services/post-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  listOfAlbums: Post[] = [];

  showConfig: any = {
    showAddAlbum: false,
    clicked: false
  };


  constructor(
    private userThang: UserApiService,
    private postThang: PostApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.postThang.getUserFavorites()
  .then((postResults: Post[]) => {
    console.log(postResults);

    // THE MAGIC HAPPENS HERE
    // (assign API results to component property)
    this.listOfAlbums = postResults;
  })
  .catch((err) => {
    alert("Sorry! Something went wrong.")

    console.log("Album List Error!")
    console.log(err)
  })

  }

  toggleShow() {

    if (this.showConfig.showAddAlbum) {
      this.showConfig.showAddAlbum = false;
      setTimeout(() => {
        this.showConfig.clicked = false;

      }, 200);
    }
    else {
      this.showConfig.showAddAlbum = true;
      this.showConfig.clicked = true;
    }
  }

}
