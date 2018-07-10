
import { Injectable } from '@angular/core';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';
let env_mode = 'localdev'
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor() { }
  getDataListFac() {
    switch (env_mode) {
      case 'localdev':
        return this.getMockDataList;
        break;
      case 'dev':
        return this.getDataList;
        break;
      default:
        return this.getMockDataList;
        break;
    }
  }
  private getDataList() {

  }
  private getMockDataList() {
    
  }
}
