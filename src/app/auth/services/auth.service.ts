import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthService {
  [x: string]: any;

  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    
  }

  async logout() {
    await this.afAuth.signOut();
  } 
}
