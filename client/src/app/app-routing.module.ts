import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminComponent } from './pages/admin/components/admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
    {path: 'admin', component: AdminComponent}
  ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
