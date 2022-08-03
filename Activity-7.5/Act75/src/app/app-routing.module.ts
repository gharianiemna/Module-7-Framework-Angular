import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component'
import {DetailsComponent} from './components/details/details.component'
import { NewArticleComponent } from './components/new-article/new-article.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articleList', component: ArticlelistComponent },
  { path: 'detail/:id', component:DetailsComponent},
  { path: 'create', component:NewArticleComponent},
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
