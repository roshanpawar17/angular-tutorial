import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticate(){
    return localStorage.getItem('loginuser');
  }
}
