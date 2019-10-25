import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/authService/auth.service';
import { DbService } from './services/DbService/db.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    DbService
  ],
})
export class CoreModule { }
