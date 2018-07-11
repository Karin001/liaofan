import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatalistComponent } from './datalist/datalist.component';
import { SharedModule } from '../shared/shared.module';
import { ApprovalSheetComponent } from './approval-sheet/approval-sheet.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DatalistComponent, ApprovalSheetComponent],
  exports:[DatalistComponent] 
})
export class DataModule { }
