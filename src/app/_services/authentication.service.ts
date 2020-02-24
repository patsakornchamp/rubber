import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    // PHP_API_SERVER = "http://158.108.207.7/rubberProject/demo/ctrl.php";
    PHP_API_SERVER = "http://localhost/RubberTree/ctrl.php";

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(data) {
        return this.http.post<any>(`${this.PHP_API_SERVER}`, data)
            .pipe(map(user => {
                console.log(user);
                console.log(user.token);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}