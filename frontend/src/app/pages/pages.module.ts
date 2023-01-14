import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    CalendarioComponent,
    MatriculasComponent,
    IncidenciasComponent,
    EvaluacionComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule
  ],
})
export class PagesModule { }
