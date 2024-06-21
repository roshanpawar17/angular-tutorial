import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseViewComponent } from './case-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  component: CaseViewComponent

}
]

@NgModule({
  declarations: [
    CaseViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CaseViewModule { }
