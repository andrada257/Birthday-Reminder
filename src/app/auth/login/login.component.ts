import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../data.interface';
import { UserService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  logInForm!: any;
  users: User[]=[];

  constructor(private router: Router, private _snackBar: MatSnackBar,private userService:UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(false)
    });
  }


  logIn() {
    //todo'login'
    console.log(this.logInForm.value);
    if(this.logInForm.valid){
      this.searchUser();
    this.logInForm.reset();
  }
  }

  get email() {
    return this.logInForm.get('email');
  }

  get password() {
    return this.logInForm.get('password');
  }

  searchUser() {
    this.users = this.userService.searchUser(this.email);
    if(this.users!=null)
    {
      alert(`Log In Successfully, ${this.logInForm.value.firstName}`);
    this.router.navigateByUrl('table');
    this._snackBar.open('Log In Successfully!', '', {
      duration: 2000,
    });

    }
  }


  
}
