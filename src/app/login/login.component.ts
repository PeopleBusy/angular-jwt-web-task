import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { User } from '../data-model'

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  private mode : number = 0;

  constructor(private fb: FormBuilder, private authenticationService : AuthenticationService, private router : Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ], // <--- the FormControl called "name"
      password: ['', Validators.required ]
    });
  }

  onLogin(user){
    this.authenticationService.login(user)
        .subscribe(response => {
            this.mode = 0;
            let jwt = response.headers.get('authorization');
            this.authenticationService.saveToken(jwt);
            this.router.navigateByUrl("/tasks");
        },
        error => {
          this.mode = 1;
        }
      )
  }

}
