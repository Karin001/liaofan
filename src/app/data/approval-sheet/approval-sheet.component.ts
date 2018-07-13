import { Component, OnInit, ViewChild } from '@angular/core';
import { DataItemJson } from '../../DataTypeDefine/DataListJson';
import { ItemTransmitService, TransType } from '../../service/item-transmit.service';
import { instantiateDefaultStyleNormalizer } from '@angular/platform-browser/animations/src/providers';
@Component({
  selector: 'app-approval-sheet',
  templateUrl: './approval-sheet.component.html',
  styleUrls: ['./approval-sheet.component.scss']
})
export class ApprovalSheetComponent implements OnInit {
  items: TransType;
  gongSum;
  guoSum;
  constructor(
    private itemTransmitServ: ItemTransmitService
  ) { }

  ngOnInit() {
    this.itemTransmitServ.watchItems().subscribe(items => {
      if (items) {
        this.items = items;
        this.gong_guo_sum();
      }

    });
  }
  approval() {
    console.log(this.items);
  }
  gong_guo_sum() {
    if (this.items.gong && this.items.gong.length !== 0) {
      this.gongSum = this.items.gong.map(v => v.customval).reduce((pre, cur) => {
        return pre + cur;
      });
    }
    if (this.items.guo && this.items.guo.length !== 0) {
      this.guoSum = this.items.guo.map(v => v.customval).reduce((pre, cur) => {
        return pre + cur;
      });
    }
  }
  microConfigMinus(item) {

    item.customval = item.customval > item.val[0] ? item.customval - 1 : item.val[0];
    this.gong_guo_sum();
  }
  microConfigAdd(item) {

    item.customval = item.customval < item.val[item.val.length - 1] ? item.customval + 1 : item.val[item.val.length - 1];
    this.gong_guo_sum();
  }
  pMulitiple(item) {
    item.customval += item.val;
    this.gong_guo_sum();
  }
  mMulitiple(item) {
    item.customval = item.customval > item.val ? item.customval - item.val : item.val;
    this.gong_guo_sum();
  }

}
