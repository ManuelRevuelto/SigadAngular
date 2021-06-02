import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from '../pages/modules/calendario/calendario.component';
import { EvaluacionComponent } from '../pages/modules/evaluacion/evaluacion.component';
import { HomeComponent } from '../pages/modules/home/home.component';
import { IncidenciasComponent } from '../pages/modules/incidencias/incidencias.component';
import { MatriculasComponent } from '../pages/modules/matriculas/matriculas.component';

const routes: Routes = [
	
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'matriculas', component: MatriculasComponent},
	{ path: 'calendario', component: CalendarioComponent},
	{ path: 'incidencias', component: IncidenciasComponent},
	{ path: 'evaluacion', component: EvaluacionComponent},
	{ path: 'login', loadChildren: () => import('../pages/modules/login/login.module').then(m => m.LoginModule) },
	{ path: '**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
