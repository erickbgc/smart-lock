import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canLoad(route: ActivatedRouteSnapshot) {
    console.log(route);

    let authInfo = {
      authenticated: false
    }

    if (!authInfo.authenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }

}
