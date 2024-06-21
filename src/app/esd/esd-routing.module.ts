import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsdComponent } from './esd.component';

const routes: Routes = [
  
  {
    path: '',
    component: EsdComponent,
    children: [
      {
        path: '',
        redirectTo: 'dynamic_request',
        pathMatch: 'full',
      },
        {
          path: 'dynamic_request',
          loadChildren: ()=> import("./dynamic-filter-request-list/dynamic-filter-request-list.module").then(m=>m.DynamicFilterRequestListModule)
        },
        {
          path: 'create_request',
          loadChildren: ()=> import("./create-request/create-request.module").then(m=>m.CreateRequestModule)
        }
    ]
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsdRoutingModule { }
