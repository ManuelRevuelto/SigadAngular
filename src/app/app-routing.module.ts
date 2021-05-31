import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { EvaluacionComponent } from './pages/evaluacion/evaluacion.component';
import { HomeComponent } from './pages/home/home.component';
import { IncidenciasComponent } from './pages/incidencias/incidencias.component';
import { MatriculasComponent } from './pages/matriculas/matriculas.component';

const routes: Routes = [
	
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: '', component: HomeComponent },
	{ path: 'matriculas', component: MatriculasComponent},
	{ path: 'calendario', component: CalendarioComponent},
	{ path: 'incidencias', component: IncidenciasComponent},
	{ path: 'evaluacion', component: EvaluacionComponent},
	{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
	{ path: '**', component: HomeComponent},
	
	// { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
