import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <img src="../../../fotos/CEBO.jpg" alt="avatarAlumno">
  `
})
export class HomeComponent implements OnInit {
  dni = '25359770Q';
  lugar = 'Zaragoza';
  fechnac = '13/10/2001';

  domicilio = 'Calle Sangenis, 60';
  telefono = '987654321';
  nacionalidad = 'Español';
  email = 'manu@gmail.com';
  
  cebo = '../fotos/CEBO.jpg';

  constructor() { }  

  ngOnInit(): void {
  }

}
