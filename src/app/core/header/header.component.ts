import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ItemTransmitService } from '../../service/item-transmit.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() ev_toggleSidenav = new EventEmitter();
  selectedItems:string;
  constructor(
   private itemTransmitServ:ItemTransmitService
  ) { }

  ngOnInit() {
    this.itemTransmitServ.watchItems().subscribe(items => {
      if(items) {
        this.selectedItems = items.count + '' ;
        console.log(this.selectedItems,typeof this.selectedItems);
      }
    })
  }

}
