import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  PHP_API_SERVER = "http://158.108.207.7/rubberProject/demo/ctrl.php";

  read(data:any){
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`,data);
  }
  insert(data: any): Observable<any>{
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`,data)
  }
  delete(data: any) {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`,data);
  }
  update(data: Array<any>) {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`, data);
  }

}