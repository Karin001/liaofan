import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatalistComponent } from './datalist/datalist.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DatalistComponent]
})
export class DataModule { }
