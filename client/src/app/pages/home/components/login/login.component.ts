import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { AlertifyService } from 'src/app/core/services/AlertifyService/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe(next => {
        this.alertify.success('logged in successfully');
      },
      error => {
        this.alertify.error(error);
      }, () => {
        this.router.navigate(['/admin']);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
