import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {UserApiService} from './services/user-api.service';
import {PostApiService} from './services/post-api.service';



import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { SpotifyFrameComponent } from './spotify-frame/spotify-frame.component';
import { HelpComponent } from './help/help.component';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    NotFoundComponent,
    AboutComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
    AddAlbumComponent,
    SpotifyFrameComponent,
    HelpComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserApiService,
    PostApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
