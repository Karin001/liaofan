import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../service/restapi.service';
import { DataListJson,DataItemJson } from '../../DataTypeDefine/DataListJson';
import { ActivatedRoute } from '@angular/router';
import { ItemTransmitService } from '../../service/item-transmit.service';
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
  dataList: DataListJson;
  itemsToShow: DataItemJson[];
  selectedItems: DataItemJson[] = [];
  dataWaiting: boolean = true;
  path:string[]
  constructor(
    private restapi: RestapiService,
    private activatedRoute: ActivatedRoute,
    private itemTransServ: ItemTransmitService
  ) {
    this.restapi.getDataListFac().subscribe(dataList => {
      if (!dataList) {
        this.dataWaiting = true;
        throw new Error('获取到非法的datalist值！')
      }
      this.dataList = dataList;
      console.log(this.path, this.dataList);
      if(this.path){
        this.itemsToShow=this.dataList[this.path[0]][this.path[1]];
        console.log('here');
        this.dataWaiting=false;
      }

    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      try {
        const path = params.get('path').split('-');
        this.path = path;
        if (!this.dataList || !this.dataList[path[0]] || !this.dataList[path[0]][path[1]]) {
          throw new Error(`在DATALIST的${path[0]}.${path[1]}中还没有数据！${this.dataList[path[0]][path[1]]}`)

        }
        this.dataWaiting = false;
        this.itemsToShow = this.dataList[path[0]][path[1]];
      } catch (error) {
        this.dataWaiting = true;
        return;
      }
     
    })
  }

  handleItems(item){
    item['selected'] = !item['selected']
    if(item['selected'] === true) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.findIndex((ele)=>item.content === ele.content);
      this.selectedItems.splice(index,1);
    }
    this.itemTransServ.sendItems(this.selectedItems);
  }


}
