import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './calendario/calendario.component';



@NgModule({
  declarations: [
    HomeComponent,
    MatriculasComponent,
    IncidenciasComponent,
    EvaluacionComponent,
    LoginComponent,
    CalendarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ModulesModule {}

