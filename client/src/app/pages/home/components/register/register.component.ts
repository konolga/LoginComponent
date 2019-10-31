import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { AlertifyService } from 'src/app/core/services/AlertifyService/alertify.service';
import { User } from 'src/app/core/models/user';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();

user = {} as User;
username = new FormControl('', [Validators.required,
                                Validators.minLength(4),
                                Validators.maxLength(25),
                                Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')]);
identifier = new FormControl('', [Validators.required,
                                  Validators.minLength(4),
                                  Validators.maxLength(25),
                                  Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')]);
password = new FormControl('', [Validators.required,
                                Validators.minLength(6),
                                Validators.maxLength(25),
                                Validators.pattern('^[a-zA-Z0-9]*$')]);


constructor(private authService: AuthService, private alertify: AlertifyService) { }

ngOnInit() {

  }

  register() {
    this.user = {Id: null, Username: this.username.value, Identifier: this.identifier.value, Password: this.password.value};
    this.authService.register(this.user).subscribe(() =>{
      this.alertify.success('registration successful');
      this.cancelRegister.emit(false);
    }, error => {
      this.alertify.error(error.error.title);
      console.log(error.error.errors);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  getUsernameErrorMessage() {
    return  this.username.hasError('required') ? '*Username is mandatory' :
            this.username.hasError('minlength') ? 'Username must be at least 4 characters long' :
            this.username.hasError('maxlength') ? 'Username must be maximum 25 characters long' :
            this.username.hasError('pattern') ? 'Characters are not allowed' :
            '';
  }
  getIdentifierErrorMessage() {
    return  this.identifier.hasError('required') ? '*Company identifier is mandatory' :
            this.identifier.hasError('minlength') ? 'Password must be at least 4 characters long' :
            this.identifier.hasError('maxlength') ? 'Password must be maximum 25 characters long' :
            this.identifier.hasError('pattern') ? 'Characters are not allowed' :
            '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Please enter a password' :
           this.password.hasError('minlength') ? 'Password must be at least 6 characters long' :
           this.password.hasError('maxlength') ? 'Password must be maximum 25 characters long' :
           this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number' :
           '';
  }
}
