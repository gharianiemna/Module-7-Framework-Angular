import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlelistComponent } from './articlelist/articlelist.component'
import {DetailsComponent} from './details/details.component'
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articleList', component: ArticlelistComponent },
  { path: 'detail/:id', component:DetailsComponent},
   { path: 'create', component:NewArticleComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
