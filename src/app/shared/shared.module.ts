import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { angularMaterial } from './angular-material/angular-material'; 
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    angularMaterial,
    ReactiveFormsModule
  ],
  exports: [
    angularMaterial,
    ReactiveFormsComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
