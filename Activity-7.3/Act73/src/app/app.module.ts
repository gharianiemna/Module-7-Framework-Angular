import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ArticlelistComponent,
    HeaderComponent,
    NewArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
