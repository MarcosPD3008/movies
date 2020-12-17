import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {path:"Home/:search", component:HomeComponent},
  {path:"Movie/:id", component:MovieComponent},
  {path:"**", pathMatch:"full",redirectTo:"Home/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
