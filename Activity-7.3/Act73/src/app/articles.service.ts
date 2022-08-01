import { ARTICLES } from './mock-articles';
import { Injectable } from '@angular/core';
import { Article } from './articles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesList =ARTICLES;
  constructor() { }
  
  getArticle(): Observable<Article[]> {
    const articles = of(ARTICLES);
  return articles;  
  }

  getDetail(id: number): Observable<Article> {
    // For now, assume that an article with the specified `id` always exists.
    const article = ARTICLES.find(h => h.id === id)!;
    return of(article);
  }
 

 addComment(formValue: { content: string, author: string }, id: number ){
 const comments=ARTICLES.find(h => h.id === id)!.comment;
 const newComment = {
       ...formValue
    };
 return comments.push(newComment);
  }


  addArticle(formValue: { title: string, content: string, date: Date, author: string }) {
    const article = {
        ...formValue,
        comment: [null],
        id: this.articlesList[this.articlesList.length - 1].id + 1
    };
    this.articlesList.push(article);
}
}
