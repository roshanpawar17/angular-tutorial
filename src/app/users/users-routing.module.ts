import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { resloveUser } from './user/user';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent
      },
      {
        path: ':id/:name/edit',
        component: UserEditComponent,
        resolve: {user: resloveUser}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
