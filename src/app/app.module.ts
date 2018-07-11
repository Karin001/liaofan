import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RestapiService } from './service/restapi.service';
import { ItemTransmitService } from './service/item-transmit.service';
import { Routes,RouterModule } from '@angular/router';
import { DatalistComponent } from './data/datalist/datalist.component';
import { ApprovalSheetComponent } from './data/approval-sheet/approval-sheet.component';
const routes: Routes = [{
  path: 'dataList/:path', component: DatalistComponent,
},{
  path: 'approvalSheet', component: ApprovalSheetComponent,
}]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RestapiService,ItemTransmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
