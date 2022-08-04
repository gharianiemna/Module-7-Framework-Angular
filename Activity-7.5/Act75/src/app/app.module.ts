
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ArticlelistComponent } from './components/articlelist/articlelist.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NewArticleComponent } from './components/new-article/new-article.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { Interceptor } from './interceptor';
import { JwtHelperService , JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ArticlelistComponent,
    HeaderComponent,
    NewArticleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}, { provide: JWT_OPTIONS , useValue: JWT_OPTIONS},
   AuthGuardService, RoleGuardService, JwtHelperService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
