import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accesskey = 'ACCESS_TOKEN';

  constructor() { }

  public login(access_token: string){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
