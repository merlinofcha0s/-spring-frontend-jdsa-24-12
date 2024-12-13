import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {UserService} from './user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const token = userService.currentUserJWT;
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
}
