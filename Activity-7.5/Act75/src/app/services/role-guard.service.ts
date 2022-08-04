import { Injectable } from '@angular/core';
import {   Router,  CanActivate,  ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from './user.service';
import decode from 'jwt-decode';


@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('jwt') as string;
    // decode the token to get its payload
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.roles[0] !== expectedRole 
    ) {
        window.alert('acces interdit')
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}