import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component'
import {DetailsComponent} from './components/details/details.component'
import { NewArticleComponent } from './components/new-article/new-article.component';
import { LoginComponent } from './components/login/login.component';
import {   AuthGuardService as AuthGuard } from'./services/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articleList', component: ArticlelistComponent, canActivate: [AuthGuard]  },
  { path: 'detail/:id', component:DetailsComponent, canActivate: [AuthGuard] },
  { path: 'create', component:NewArticleComponent, canActivate: [AuthGuard] },
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
