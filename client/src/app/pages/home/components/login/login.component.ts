import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { AlertifyService } from 'src/app/core/services/AlertifyService/alertify.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cancelLogin = new EventEmitter();
  user = {} as User;
  username = new FormControl('', [Validators.required]);
  identifier = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.user = {Id: null, Username: this.username.value, Identifier: this.identifier.value, Password: this.password.value};
    this.authService.login(this.user).subscribe(next => {
        this.alertify.success('logged in successfully');
        this.router.navigate(['/admin']);
        console.log(this.router)
      },
      error => {
        this.alertify.error(error.error.title);
        console.log(error.error.errors);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }



  cancel() {
    this.cancelLogin.emit(false);
  }

  getErrorMessage() {
    return  this.username.hasError('required') ? '*Username is mandatory' :
            this.identifier.hasError('required') ? '*Identifier is mandatory' :
            this.password.hasError('required') ? '*Password is mandatory' :
            '';
  }

}
