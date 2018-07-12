import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';
import { DataListJson } from '../DataTypeDefine/DataListJson';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { retry } from 'rxjs/operators/retry';
import 'rxjs/add/operator/retry';

const uri = {
  dev: 'assets/mockData/gongguo.json',
  pro: ''
}
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  DataListCache: DataListJson;
  DataLoadSubject = new BehaviorSubject<string>(null);
  constructor(
    private http: HttpClient
  ) { }
  public watchDataLoad() {
    return this.DataLoadSubject.asObservable();
  }
  public getDataList() {
    this.http.get(uri.dev)
      .retry(5)
      .subscribe((data: DataListJson) => {
        this.DataListCache = data;
        this.DataLoadSubject.next('data load sucess');
      }, err => {
        throw new Error('service没能正确加载datalist数据');
      });
  }
}
