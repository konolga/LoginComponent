import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/authService/auth.service';
import { DbService } from './services/DbService/db.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertifyService } from './services/AlertifyService/alertify.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    DbService,
    AlertifyService
  ],
})
export class CoreModule { }
