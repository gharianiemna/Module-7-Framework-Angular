// import { Injectable } from '@angular/core';
// import {   Router,  CanActivate,  ActivatedRouteSnapshot} from '@angular/router';
// import { UserService } from './user.service';
// import decode from 'jwt-decode';


// @Injectable()
// export class RoleGuardService implements CanActivate {
//   constructor(public auth: UserService, public router: Router) {}
//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     // this will be passed from the route config
//     // on the data property
//     const expectedRole = route.data.expectedRole;
//     const token = localStorage.getItem('jwt') as string;
//     // decode the token to get its payload
//     const tokenPayload = decode(JSON.parse(token));
   
//     if (
//       !this.auth.isAuthenticated() || 
//       tokenPayload.roles !== expectedRole 
//     ) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }