import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isAuth!:boolean;
  constructor(private router:Router, private userService:UserService) { }

 
  ngOnInit(): void { }
  onLogout() : void {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('login');
  }

  isLoggedIn() {
    return localStorage.getItem('jwt');
  }

}
