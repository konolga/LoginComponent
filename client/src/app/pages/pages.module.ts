import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeModule,
    AdminModule
  ]
})
export class PagesModule { }
