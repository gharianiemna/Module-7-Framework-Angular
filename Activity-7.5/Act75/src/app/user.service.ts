import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) {}

  SignIn(userInput:FormGroup ): Observable<any> {
     return this.http.post<any>('http://127.0.0.1:8000/api/login_check',userInput)
        .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    if (response) {
                        localStorage.setItem('jwt', JSON.stringify(response));
                    }
                })
            );
}
}
