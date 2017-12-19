import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import {HelpComponent} from './help/help.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumListComponent},
  {path: 'add-album', component: AddAlbumComponent},
  {path: 'albums/:id', component: AlbumDetailsComponent},
  {path: 'help', component: HelpComponent},
  {path: 'favorites', component: FavoritesComponent},
  { path: 'albums/:id/add', component: AlbumDetailsComponent },
  { path: 'albums/:id/delete', component: AlbumDetailsComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
