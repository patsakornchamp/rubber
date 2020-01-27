import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accesskey = 'ACCESS_TOKEN';

  constructor() { }

  public login(access_token: string){
    localStorage.setItem(this.accesskey, access_token);
  }

  public isLoggedIn(){
    return localStorage.getItem(this.accesskey) !== null;
  }

  public getLoggedIn(){
    return localStorage.getItem(this.accesskey);
  }

  public logout(){
    localStorage.removeItem(this.accesskey);
  }
}
