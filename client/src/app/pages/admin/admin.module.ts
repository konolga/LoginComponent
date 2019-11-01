import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRouting } from './admin-routing.module';

import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';




@NgModule({
  declarations: [
    AdminComponent,
    CompanyCardComponent,
    ContactCardComponent,
    CreateCompanyComponent
    ],

  imports: [
    CommonModule,
    AdminRouting,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
