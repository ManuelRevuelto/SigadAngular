import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
