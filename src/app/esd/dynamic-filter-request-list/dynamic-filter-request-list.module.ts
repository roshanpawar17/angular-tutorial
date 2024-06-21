import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFilterRequestListRoutingModule } from './dynamic-filter-request-list-routing.module';
import { DynamicFilterRequestListComponent } from './dynamic-filter-request-list.component';

@NgModule({
  declarations: [
    DynamicFilterRequestListComponent,
  ],
  imports: [
    CommonModule,
    DynamicFilterRequestListRoutingModule
  ]
})
export class DynamicFilterRequestListModule { }
