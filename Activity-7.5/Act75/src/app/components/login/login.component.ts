import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userPreview$!: Observable<User>;


  constructor(private formBuilder: FormBuilder,  private router: Router,
   private userService: UserService,      private location: Location ) { }

 ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: [null, [Validators.required]],
        password:  [null, [Validators.required]],

    }, {
    updateOn: 'blur'
      });
    this.userPreview$ = this.loginForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue, 
        roles: ["ROLE_USER"],
        id: 0
     }))
    );
  }

  onSubmitForm() {
      this.userService.SignIn(this.loginForm.value).subscribe();
      
      this.router.navigateByUrl('/articleList');
  }
}
