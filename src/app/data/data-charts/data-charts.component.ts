import { Component, OnInit } from '@angular/core';
import { single, multi} from '../../../assets/mockData/data';

@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.scss']
})
export class DataChartsComponent implements OnInit {
  single: any[];
  multi: any[];

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
  constructor() {
    Object.assign(this, { single, multi }
    )
  }

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }
  onDateChange(e){
    console.log(e);
  }
}
