import { ArticlesService } from '../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../articles';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {

articles: Article[] = [];
articles$!: Observable<Article[]>;

constructor(private ArticlesService: ArticlesService, private router:Router    ,private location: Location) {

      }
    getArticle(): void {
      this.ArticlesService.getArticle().subscribe(articles => this.articles = articles);
      console.log(this.articles);
    }
  

    ngOnInit(): void {
      this.articles$=this.ArticlesService.getArticle();
      }

    goBack(): void {
        this.location.back();
      }
        onAddNewArticle() {
    this.router.navigateByUrl('/create');
  }
  consol(){
    console.log(this.articles)
  }
  //       onDetail() { 
  //   this.router.navigateByUrl('/addEditControl/');
  // }
}
