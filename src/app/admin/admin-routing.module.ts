import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { authGaurd, authGaurdChild, authGaurdDeactivate } from '../core/router-gaurd/router-gaurd';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGaurd],
    // canActivateChild: [authGaurdChild],
    data: {
      isPrivatePage: true
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canDeactivate: [authGaurdDeactivate],
        data: {
          isPrivatePage: true
        }
      },
      {
        path: 'about',
        component: AboutComponent,
      }
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
