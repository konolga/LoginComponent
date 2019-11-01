import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './pages/admin/admin.module';
import { HomeModule } from './pages/home/home.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
    RouterModule,
    SharedModule,
    HomeModule,
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
