import { Component, OnInit } from '@angular/core';
import { DataItemJson} from '../../DataTypeDefine/DataListJson';
import { ItemTransmitService,TransType } from '../../service/item-transmit.service';
import { instantiateDefaultStyleNormalizer } from '@angular/platform-browser/animations/src/providers';
@Component({
  selector: 'app-approval-sheet',
  templateUrl: './approval-sheet.component.html',
  styleUrls: ['./approval-sheet.component.scss']
})
export class ApprovalSheetComponent implements OnInit {
 items: TransType;
  constructor(
    private itemTransmitServ:ItemTransmitService
  ) { }

  ngOnInit() {
    this.itemTransmitServ.watchItems().subscribe(items => {
      if(items){
        this.items = items;
      }
   
    })
  }
 approval(){
   console.log(this.items);
 }

}
