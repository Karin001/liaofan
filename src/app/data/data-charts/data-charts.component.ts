import { Component, OnInit } from '@angular/core';
import { single, multi } from '../../../assets/mockData/data';
import { RestapiService } from '../../service/restapi.service';
import { DateJson, DataListJson } from '../../DataTypeDefine/DataListJson';
@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.scss']
})
export class DataChartsComponent implements OnInit {
  private dateJson: DateJson;
  private datalist: DataListJson;
  single: any[];
  multi: any[];
  disabled = true;
  showBox;
  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  constructor(
    private restapi: RestapiService
  ) {
    Object.assign(this, { single, multi }
    );
  }

  ngOnInit() {
    this.restapi.watchDateJsonLoad().subscribe(signal => {
      if (signal === 'dateJson load success') {
        this.dateJson = this.restapi.DateJsonCache;
        console.log(this.dateJson);
      }
    });
    this.restapi.watchDataLoad().subscribe(signal => {
      if (signal === 'data load sucess') {
        this.datalist = this.restapi.DataListCache;
        console.log(this.datalist);
      }
    });
  }
  onSelect(event) {
    console.log(event);
    if (event.series === '中') {
      return;
    }
    const listCache = this.showBox.find(ele => ele.name === event.series)
      .series.find(ele => ele.name === event.name).valuelist;
    const groupName = event.series === '功' ? 'gong' : 'guo';
    const listItem = this.datalist[groupName].xing.concat(this.datalist[groupName].yu, this.datalist[groupName].yi)
      .filter(ele => Object.keys(listCache).includes(ele.id))
      .map(ele => {
        const newOne = { postVal: listCache[ele.id] };
        Object.assign(newOne, ele);
        return newOne;
      });
    console.log(listItem);
  }
  filFac(data) {
    return (d: Date) => {
      return data.data.map(e => new Date(e.date).toLocaleDateString().slice(0, 10))
        .includes(d.toLocaleDateString().slice(0, 10)) && d.getTime() - new Date(data.data[0].date).getTime() > -86400000 &&
        d.getTime() < new Date(data.data[data.data.length - 1].date).getTime();

    };
  }

  onDateChange(e) {
    const se = new Date(e.value).toLocaleDateString();
    console.log(se);
    const data = this.dateJson.data;
    const seDateIndex = data.findIndex(ele => {
      console.log(new Date(ele.date).toLocaleDateString(), se);
      return new Date(ele.date).toLocaleDateString() === se;
    });
    let endIndex = seDateIndex;
    let head = false;
    let tail = false;
    for (endIndex; endIndex - seDateIndex < 3; endIndex++) {
      console.log('endindex', endIndex);
      if (!data[endIndex]) {
        // 到尾了
        tail = true;
        break;
      }

    }
    let startIndex = seDateIndex;
    for (startIndex; seDateIndex - startIndex < 4; startIndex--) {
      if (!data[startIndex] || startIndex === 0) {
        // 到头了
        head = true;
        break;
      }
    }
    if (endIndex - startIndex < 6) {
      if (head && !tail) {
        while (endIndex - startIndex < 6 && data[endIndex + 1]) {
          endIndex++;
        }
      } else if (tail && !head) {
        while (endIndex - startIndex < 6 && data[startIndex - 1]) {
          startIndex--;
        }
      }
    }
    const temp = data.slice(startIndex, endIndex + 1).map(ele => {
      return { 'name': ele.date.slice(5, 10), 'value': ele.gong.val, 'list': ele.gong.list, 'valuelist': ele.gong._val };
    });
    const temp2 = data.slice(startIndex, endIndex + 1).map(ele => {
      return { 'name': ele.date.slice(5, 10), 'value': ele.guo.val, 'list': ele.guo.list, 'valuelist': ele.guo._val };
    });
    const temp3 = temp.map((v, index) => {
      return { 'name': v.name, 'value': v.value - temp2[index].value };
    })
    console.log(temp, startIndex, endIndex);
    this.showBox = [
      {
        'name': '功',
        'series': temp
      },
      {
        'name': '过',
        'series': temp2
      },
      {
        'name': '中',
        'series': temp3
      }
    ];
  }
  handleDate() {

  }
}
export var mult = [
  {
    "name": "功",
    "series": [
      {
        "name": '一',
        "value": 730
      },
      {
        "name": "二",
        "value": 8940
      }
    ]
  },

  {
    "name": "过",
    "series": [
      {
        "name": "一",
        "value": -123
      },
      {
        "name": "二",
        "value": -1000
      },
      {
        "name": "三",
        "value": '0'
      },
      {
        "name": "四",
        "value": -34
      },
      {
        "name": "五",
        "value": -3
      },
      {
        "name": "六",
        "value": -6
      }, {
        "name": '日',
        "value": -1
      }
    ]
  },

  {
    "name": "中和",
    "series": [
      {
        "name": "一",
        "value": 5000
      },
      {
        "name": "二",
        "value": 5800
      }
    ]
  }
];
