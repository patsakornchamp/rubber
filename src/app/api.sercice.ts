import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  PHP_API_SERVER = "http://158.108.207.7/rubberProject/demo/ctrl.php";

  readPolicies(pl:any){
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`,pl);
  }
  insert(dataMod: any): Observable<any>{
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`,dataMod)
  }
  delete(id: any) {
    console.log(id);
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`,id);
  }
  updatePolicy(pl: Array<any>) {
    return this.httpClient.put<Array<any>>(`${this.PHP_API_SERVER}`, pl);
  }

}
