import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {environment} from '../../environments/environment';

export class Post {
  albumTitle: string;
  artist: string;
  firstTrack: string;
  firstTrackSpotify: string;
  lastTrack: string;
  lastTrackSpotify: string;
  genre: string;
  // likes: number;
  owner: string;

  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class PostApiService {

  constructor(private httpThang: HttpClient) { }

  getAlbums() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/albums`,
      {withCredentials: true}
    )
        .toPromise();
  }

  getOnePost (oneId: string) {
    return this.httpThang.get(
      `${environment.backendUrl}/api/albums/${oneId}`,
    {withCredentials: true})
      .toPromise();
  }

  postAlbums(newPost: Post) {
    return this.httpThang.post(
      `${environment.backendUrl}/api/albums`,
      newPost,
      {withCredentials: true}
    ).toPromise();
  } // POST /api/drinks

  getUserFavorites() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/favorites`,
      {withCredentials: true}
    ).toPromise()

  } // GET /api/drinks/my-drinks

  deleteOneAlbum (oneId) {
    return this.httpThang.delete(
      `${environment.backendUrl}/api/album/${oneId}`,
    {withCredentials: true})
      .toPromise();
  }

}
