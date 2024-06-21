import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsdRoutingModule } from './esd-routing.module';
import { EsdComponent } from './esd.component';
import { RequestSummaryDetailComponent } from './request-summary-detail/request-summary-detail.component';
import { DynamicOverlayComponent } from './dynamic-overlay/dynamic-overlay.component';


@NgModule({
  declarations: [
    EsdComponent,
    RequestSummaryDetailComponent,
    DynamicOverlayComponent
  ],
  imports: [
    CommonModule,
    EsdRoutingModule
  ]
})
export class EsdModule { }
