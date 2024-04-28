import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    //localhost:4200-login page
    path:'',component:LoginComponent

  },
  {
    path:'dashboard',component:DashboardComponent
  },
  { path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
  {
    path:'**',redirectTo:'LoginComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
