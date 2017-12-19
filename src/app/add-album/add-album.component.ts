import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router';
import {PostApiService, Post} from '../services/post-api.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  thePost = new Post();

  constructor(
    private postThang: PostApiService,
    private routerThang: Router) { }

  ngOnInit() {
  }

  addAlbumAjax() {
    this.postThang.postAlbums(this.thePost)
    .then((apiResults: Post) => {
      this.thePost = new Post();
      this.routerThang.navigate(['/albums'])
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.");
      console.log("Add Album error");
      console.log(err);
    });

  }

}
