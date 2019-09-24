import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterloginService implements CanActivate{

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
 

  constructor(private token:TokenService,private router:Router) { }
  canActivate() {
    if (this.token.loggedIn())
    {
      return this.token.loggedIn();
    }
    else {
     this.router.navigateByUrl('/login');
     return false;
     
    }
  }
}
