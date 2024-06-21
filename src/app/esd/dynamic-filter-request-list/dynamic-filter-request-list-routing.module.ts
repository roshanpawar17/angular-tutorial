import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFilterRequestListComponent } from './dynamic-filter-request-list.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFilterRequestListComponent,
    children: [
      {
        path: 'case-view',
        loadChildren: ()=> import("../case-view/case-view.module").then(m=>m.CaseViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFilterRequestListRoutingModule { }
