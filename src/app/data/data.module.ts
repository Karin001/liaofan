import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatalistComponent } from './datalist/datalist.component';
import { SharedModule } from '../shared/shared.module';
import { ApprovalSheetComponent } from './approval-sheet/approval-sheet.component';
import { DataChartsComponent } from './data-charts/data-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule
  ],
  declarations: [DatalistComponent, ApprovalSheetComponent, DataChartsComponent],
  exports: [DatalistComponent]
})
export class DataModule { }
