import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() shouldRun=false;
  @ViewChild('sidenav') sidenav: MatSidenav;
  
  reason = '';

  
  constructor() { }

  ngOnInit() {
  }
 
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
