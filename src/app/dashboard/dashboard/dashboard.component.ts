import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  login() {
    //todo

    this.router.navigateByUrl('/auth');
  //  this._snackBar.open
  //  (
  //    'Log Out Successfully!', '', 
  //  {
  //    duration: 2000,
  //  }
  // );
  }
}
