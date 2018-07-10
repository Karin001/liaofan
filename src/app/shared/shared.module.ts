import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports:[MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SharedModule { }
