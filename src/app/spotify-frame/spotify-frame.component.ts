import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-spotify-frame',
  templateUrl: './spotify-frame.component.html',
  styleUrls: ['./spotify-frame.component.css']
})
export class SpotifyFrameComponent implements OnInit {

  @Input() spotifyId: string;

  constructor(private domThang: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl() {
    return this.domThang.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed?uri=${ this.spotifyId }`
    );
  }

}
