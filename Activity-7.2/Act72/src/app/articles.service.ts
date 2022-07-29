import { ARTICLES } from './mock-articles';
import { Injectable } from '@angular/core';
import { Article } from './articles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getArticle(): Observable<Article[]> {
    const articles = of(ARTICLES);
  return articles;

}

  getDetail(id: number): Observable<Article> {
    // For now, assume that an article with the specified `id` always exists.
    const article = ARTICLES.find(h => h.id === id)!;
    return of(article);
  }
  constructor() { }
}
