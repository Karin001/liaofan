import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import {MatSidenav} from '@angular/material';
import { Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() shouldRun=false;
  @ViewChild('list') list :ElementRef;
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {

      console.log(this.list.nativeElement);

  });
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
