import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,  private router: Router,
   private userService: UserService ) { }

 ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: [null, [Validators.required]],
        password:  [null, [Validators.required]],
    }, {
    updateOn: 'blur'
      });
  }
  onSubmitForm() {
      this.userService.SignIn(this.loginForm.value).subscribe(); 
      this.router.navigateByUrl('/articleList');
  }
}
