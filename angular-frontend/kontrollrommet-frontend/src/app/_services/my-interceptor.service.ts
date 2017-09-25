import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = 'http://127.0.0.1:8000';
        req = req.clone({
          url: url + req.url
        });
        return next.handle(req);
    }
}
