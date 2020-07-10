import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter/filter.pipe';



@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    FilterPipe
  ]
})
export class SharedModule { }
