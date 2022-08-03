import { Injectable } from "@angular/core";
import { HttpRequest,  HttpInterceptor, HttpHandler, HttpEvent} from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserService } from "./services/user.service";

@Injectable()

export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    // add authorization header with jwt token if available
        let jwt = JSON.parse(localStorage.getItem('jwt') || '{}').token;
       
        if (jwt) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt}`
                }
            });
        }
        return next.handle(request);
    }
}