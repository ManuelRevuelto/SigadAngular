import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [  
    CalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
