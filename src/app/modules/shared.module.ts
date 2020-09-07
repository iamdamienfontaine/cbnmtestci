import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

// import { MinmaxExpandDirective } from '../directives/minmax-expand.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // MinmaxExpandDirective,
  ],
  exports: [
    CommonModule, 
    FormsModule, ReactiveFormsModule,      
    MaterialModule,
    // MinmaxExpandDirective
  ]
})
export class SharedModule { }
