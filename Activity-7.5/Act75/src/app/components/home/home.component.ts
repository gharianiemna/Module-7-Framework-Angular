import { ArticlesService } from '../../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
articles: Article[] = [];

  constructor(private ArticlesService: ArticlesService) { }



getArticle(): void {
   this.ArticlesService.getArticle().subscribe(articles => this.articles = articles);
}
  ngOnInit(): void {
this.getArticle();
  }
}
