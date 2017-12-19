import { Component, OnInit } from '@angular/core';

import {PostApiService, Post} from '../services/post-api.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postThang: PostApiService) { }

  ngOnInit() {
    this.postThang.getAlbums()
    .then((postResults: Post[]) => {
      console.log("Post List API")
      console.log(postResults);

    
      this.posts = postResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Album List Error!")
      console.log(err)
    })
  }

}
