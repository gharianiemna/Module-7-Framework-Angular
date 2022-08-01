import { ArticlesService } from './../articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../articles';
import { Location } from '@angular/common';
import {Router} from '@angular/router'
@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {

    articles: Article[] = [];

    constructor(private ArticlesService: ArticlesService, private router:Router    ,private location: Location) {

      }
    getArticle(): void {
      this.ArticlesService.getArticle().subscribe(articles => this.articles = articles);
    }


    ngOnInit(): void {
      this.getArticle();
      }

    goBack(): void {
        this.location.back();
      }
        onAddNewArticle() {
    this.router.navigateByUrl('/create');
  }
}
