import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { AlertifyService } from 'src/app/core/services/AlertifyService/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  viewCompaniesMode = false;
  createCompanyMode = false;
  constructor() { }

  ngOnInit() {}

  viewCompaniesToggle() {
    this.viewCompaniesMode = true;
    this.createCompanyMode = false;
  }
  createCompanyToggle() {
    this.createCompanyMode = true;
    this.viewCompaniesMode = false;
  }
}
