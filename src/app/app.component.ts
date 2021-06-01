import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sigadAngular';
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
