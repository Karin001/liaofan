import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';
import {DataListJson} from '../DataTypeDefine/DataListJson';
import { Observable } from 'rxjs';
let env_mode = 'localdev'
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(
    private http:HttpClient
  ) { }
  getDataListFac() :Observable<DataListJson>{
    switch (env_mode) {
      case 'localdev':
        return this.getMockDataList();

      case 'dev':
        return this.getDataList();
      
      default:
        return this.getMockDataList();
      
    }
  }
  private getDataList() :Observable<DataListJson>{
    return this.http.get(`assets/mockData/gongguo.json`) as Observable<DataListJson>;
  }
  private getMockDataList() :Observable<DataListJson>{
    return this.http.get(`assets/mockData/gongguo.json`) as Observable<DataListJson>;
  }
}
