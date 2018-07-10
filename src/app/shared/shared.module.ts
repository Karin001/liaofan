import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports:[MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
