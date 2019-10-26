import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/components/home/home.component';
import { UserAdminComponent } from './pages/admin/components/user-admin/user-admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: UserAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
