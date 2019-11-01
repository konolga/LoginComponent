import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
@NgModule({
  declarations: [
    HeaderNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderNavComponent
  ]
})
export class SharedModule {
}
