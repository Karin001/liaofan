import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports:[MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }
