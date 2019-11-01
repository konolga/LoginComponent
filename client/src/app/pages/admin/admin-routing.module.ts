import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


export const adminRoutes: Routes = [
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRouting { }
