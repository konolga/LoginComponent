import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouting } from './admin-routing.module';
import { CompanyCardComponent } from './company-card/company-card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    CompanyCardComponent,
    ContactCardComponent,
    AdminComponent],

  imports: [
    AdminRouting,
    CommonModule
  ]
})
export class AdminModule { }
