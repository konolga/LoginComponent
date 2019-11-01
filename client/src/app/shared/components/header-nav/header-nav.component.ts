import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { AlertifyService } from 'src/app/core/services/AlertifyService/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
  loggedIn() {
    return this.authService.loggedIn();
  }


}
