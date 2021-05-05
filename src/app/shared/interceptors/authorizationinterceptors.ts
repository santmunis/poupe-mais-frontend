import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNil } from 'lodash';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const access = localStorage.getItem('token');

    if (!isNil(access)) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${access}` },
      });
    }

    return next.handle(request);
  }
}
