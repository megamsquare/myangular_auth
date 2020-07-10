import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { DateAgoPipe } from './pipe/date-ago/date-ago.pipe';



@NgModule({
  declarations: [FilterPipe, DateAgoPipe],
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
