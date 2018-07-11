import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataItemJson } from '../DataTypeDefine/DataListJson';
import { Observable} from 'rxjs';
export interface TransType {
  gong: DataItemJson[];
  guo: DataItemJson[];
  count: number;
}
@Injectable({
  providedIn: 'root'
})
export class ItemTransmitService {
  itemTransmit = new BehaviorSubject<TransType>(null);
  sendItems(items: DataItemJson[]) {
    if (items && items !== []) {
      const gong = [];
      const guo = [];
      items.forEach(item => {
        if(item.switch || item.area){
          item.customval = item.val[0];
        } else{
          item.customval = item.val as number;
        }
        const pathName = item.path.split('-');
        if (pathName[0] === 'gong') {
          
          gong.push(item);
        } else if (pathName[0] === 'guo') {
          guo.push(item);
        }
      })
      this.itemTransmit.next({gong, guo, count: items.length });
    }
    
  }
  watchItems() :Observable<TransType>{
    return this.itemTransmit.asObservable()
  }
  constructor() { }
}
