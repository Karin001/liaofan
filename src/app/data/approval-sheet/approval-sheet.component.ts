import { Component, OnInit,ViewChild } from '@angular/core';
import { DataItemJson } from '../../DataTypeDefine/DataListJson';
import { ItemTransmitService, TransType } from '../../service/item-transmit.service';
import { instantiateDefaultStyleNormalizer } from '@angular/platform-browser/animations/src/providers';
@Component({
  selector: 'app-approval-sheet',
  templateUrl: './approval-sheet.component.html',
  styleUrls: ['./approval-sheet.component.scss']
})
export class ApprovalSheetComponent implements OnInit {
  @ViewChild('slider') slider;
  items: TransType;
  constructor(
    private itemTransmitServ: ItemTransmitService
  ) { }

  ngOnInit() {
    this.itemTransmitServ.watchItems().subscribe(items => {
      if (items) {
        this.items = items;
      }

    })
  }
  approval() {
    console.log(this.items);
  }
  microConfigMinus(item) {
   
    item.customval = item.customval>item.val[0]?item.customval-1:item.val[0];
  }
  microConfigAdd(item) {
  
    item.customval = item.customval<item.val[item.val.length-1]?item.customval+1:item.val[item.val.length-1];
  }
  pMulitiple(item){
    item.customval+=item.val;
  }
  mMulitiple(item){
    item.customval = item.customval>item.val?item.customval-item.val:item.val;
  }

}
