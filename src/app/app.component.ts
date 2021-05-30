import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sigadAngular';


  appPages = [
    {
      title: 'Informacion del alumno',
      url: '/app/pages/home',
      icon: 'person-circle'
    },
    {
      title: 'Matriculas',
      url: '/app/pages/matriculas',
      icon: 'calendar'
    },
    {
      title: 'Faltas',
      url: '/app/pages/calendario',
      icon: 'beer'
    },
    {
      title: 'Incidencias',
      url: '/app/pages/incidencias',
      icon: 'map'
    },
    {
      title: 'Evaluacion',
      url: '/app/pages/evaluacion',
      icon: 'information-circle'
    }
  ];
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
