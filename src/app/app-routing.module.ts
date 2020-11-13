import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtileListComponent } from './artile-list/artile-list.component';

const routes: Routes = [
  { path: 'articles', component: ArtileListComponent},
  { path : 'about', component: AboutComponent},
  { path : '', component: ArtileListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
