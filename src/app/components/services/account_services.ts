import { Injectable } from '@angular/core';
import { AuthService } from  '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AccountService{
    private mockUserItems;

    constructor(
        private authService: AuthService,private http: HttpClient
        ) { }

    setUser(user){
        this.mockUserItems = user
    }

    getUser(){
        return this.mockUserItems;
    }
}