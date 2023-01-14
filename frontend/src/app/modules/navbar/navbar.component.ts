import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor() {}
  async ngOnInit() {}
}

// export class NavbarComponent implements OnInit{
//   public isLogged = false;
//   public user:any;

//   constructor(public authSvc: AuthService) {}
//   async ngOnInit() {

//     console.log('Navbar');
//     this.user = await this.authSvc.getCurrentUser();
//     if(this.user){
//       this.isLogged = true;
//     }
//   }   
// }