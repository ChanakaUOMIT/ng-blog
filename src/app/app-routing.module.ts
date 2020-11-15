import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArtileListComponent } from './artile-list/artile-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'articles', component: ArtileListComponent},
  { path : 'about', component: AboutComponent},
  { path : '404', component: NotFoundComponent},
  { path : '', component: ArtileListComponent},
  { path : ':key', component: ArticleComponent},
  { path : '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
