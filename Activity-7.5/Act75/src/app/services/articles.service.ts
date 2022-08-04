import { ARTICLES } from '../mock-articles';
import { Injectable } from '@angular/core';
import { Article } from '../articles';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  articlesList =ARTICLES;
  constructor(private http: HttpClient) {}
  getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>('http://127.0.0.1:8000/api/articles')
  }
  getDetail(id: number): Observable<Article> {
    return this.http.get<Article>(`http://127.0.0.1:8000/api/article/${id}`);
  }
  // addComment(formValue: { content: string, author: string }, id: number ){
  //   const comments=ARTICLES.find(h => h.id === id)!.comment;
  //   const newComment = {
  //         ...formValue
  //       };
  //   return comments.push(newComment);
  // }
  addComment(commentInput:FormGroup ): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/comment',commentInput);
  }

  addArticle(articleInput:FormGroup ): Observable<any> {
      return this.http.post<any>('http://127.0.0.1:8000/api/article',articleInput);
  }
}
