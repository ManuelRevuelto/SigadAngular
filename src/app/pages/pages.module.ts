import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';

import { CalendarModule, CalendarView, DateAdapter } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [

    // CalendarioComponent,
    MatriculasComponent,
    IncidenciasComponent,
    EvaluacionComponent,

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
})
export class PagesModule {
  @Input() view: CalendarView | undefined;

  @Input() viewDate: Date | undefined;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}

