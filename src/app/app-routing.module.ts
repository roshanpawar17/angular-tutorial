import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: ()=> import("./login/login.module").then(m=>m.LoginModule)
  },
  {
    path: 'users',
    loadChildren: ()=> import("./users/users.module").then(m=>m.UsersModule)
  },
  {
    path: 'admin',
    loadChildren: ()=> import("./admin/admin.module").then(m=>m.AdminModule)
  },
  {
    path: 'esd',
    loadChildren: ()=> import("./esd/esd.module").then(m=>m.EsdModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
