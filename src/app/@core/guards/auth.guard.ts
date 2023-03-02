import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.userService.currentUser().pipe(
      catchError((err) => {
        alert('No tienes acceso, primero debes loguearte');

        this.router.navigateByUrl('/auth/login');

        return throwError(() => err);
      }),
      map((e) => {
        if (!!e) {
          return true;
        }

        return false;
      })
    );
  }
}
