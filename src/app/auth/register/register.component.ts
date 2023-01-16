import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../data.interface';
import { UserService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(private router: Router, private _snackBar: MatSnackBar, private userService:UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z]{2,}')]),
      lastName: new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z]{2,}')]),
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}')]),
      passwordCheck:new FormControl(null)
    });
  }

  register() {
    //todo
    console.log(this.registerForm.value);    

    if(this.registerForm.valid){   
      this.addUser(); 
      alert(`Log In Successfully, ${this.registerForm.value.firstName}`);
      this.router.navigateByUrl('table');
      this.registerForm.reset();
  }
  }

  addUser() {
    if (this.registerForm.valid) {
      const payload: User = {
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        email: this.email?.value,
        password: this.password?.value,
      };

      this.userService.addNewUser(payload);
      this._snackBar.open('user added successfully!');
    } else {
      this._snackBar.open(' not valid!');
    }
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordCheck(){
    return this.registerForm.get('passwordCheck');
  }
}
