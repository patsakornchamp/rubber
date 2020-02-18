import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    PHP_API_SERVER = "http://158.108.207.7/rubberProject/demo/ctrl.php";

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    register(data: any) {
        return this.http.post(`${this.PHP_API_SERVER}`, data);
    }
}