import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { RestapiService } from '../../service/restapi.service';
import { DataListJson, DataItemJson } from '../../DataTypeDefine/DataListJson';
import { ActivatedRoute } from '@angular/router';
import { ItemTransmitService } from '../../service/item-transmit.service';
import { Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
  @ViewChild('list') list:ElementRef;
  dataList: DataListJson;
  itemsToShow: DataItemJson[];
  selectedItems: DataItemJson[] = [];
  dataWaiting: boolean = true;
  routerList = ['gong-yi', 'gong-yu', 'gong-xing', 'guo-yi', 'guo-yu', 'guo-xing'];
  routerIndex;
  title;
  path: string[]
  constructor(
    private restapi: RestapiService,
    private activatedRoute: ActivatedRoute,
    private itemTransServ: ItemTransmitService,
    private router: Router
  ) {
    this.restapi.watchDataLoad().subscribe(signal => {
      if (signal === 'data load sucess') {
        console.log(signal);
        this.dataList = this.restapi.DataListCache;
        if (this.path) {
          this.itemsToShow = this.dataList[this.path[0]][this.path[1]];
          console.log('here');
          this.dataWaiting = false;
        }
      }
    })
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {

      window.document.getElementById('list').scrollTop = 0;

  });
    this.activatedRoute.paramMap.subscribe(params => {
      try {
        this.routerIndex =  this.routerList.findIndex(ele => ele === params.get('path'));
        const path = params.get('path').split('-');
        if(path[0] === 'guo') {
          this.title = '恶即斩';
        } else{
          this.title = '正气存内';
        }
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
    this.itemTransServ.watchItems().subscribe(selectedItems => {
      if (selectedItems) {
        this.selectedItems = [...selectedItems.gong, ...selectedItems.guo];
        console.log('haha', this.selectedItems);
      }
    })
  }

  handleItems(item) {
    item['selected'] = !item['selected']
    if (item['selected'] === true) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.findIndex((ele) => item.content === ele.content);
      this.selectedItems.splice(index, 1);
    }
    this.itemTransServ.sendItems(this.selectedItems);
  }


}
