import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { ApiService } from '../../api.sercice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUser: any;
  Musername: string = "";
  Mpassword: string = "";
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  loginForm: any;
  isSubmitted = false;
  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
  }
  Click_sign_In() {
    // if (this.Musername == "b5920502045" && this.Mpassword == "1234") {
    //   this.router.navigate(["/farmer"]);
    // }
    // else {
    //   window.alert("รหัสผ่านไม่ถูกต้อง");
    // }
    this.loginForm = {
      username: this.Musername,
      password: this.Mpassword
    };
    console.log(this.loginForm);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginDB(this.loginForm);
  }


  Click_Register() {
    this.router.navigateByUrl('/register');
  }


  loginDB(loginForm) {
    let data = {
      mod:"login",
      value:{
        "username": loginForm.username,
        "password": loginForm.password
      }
    };
    console.log(data);
    this.apiService.readPolicies(data).subscribe((resposne: any) => {
      console.log(resposne['statusUser']);
      if(resposne[0]['statusUser'] == 1){
        this.router.navigate(['/farmer']);
      }
      else if (resposne[0]['statusUser'] == 2) {
        this.router.navigate(['/page-cooperative']);
      }
      else if (resposne[0]['statusUser'] == 3) {
        this.router.navigate(['/page-guset-user']);
      }
      else{
        this.router.navigateByUrl('/login');
      }
    });
    // this.http.post<any>('http://localhost:3000/api/get/login/', data).subscribe(result => {
    //   console.log(result);
    //   this.dataUser = result['data'];
    //   this.data_User.setUser(this.dataUser);
    //   if(this.dataUser != null && this.dataUser['statusConfirm'] == 1){
    //     if (this.dataUser['statusUser'] == 1) {
    //       this.authService.login(result['data']['_id']); // setToken
    //       // this.router.navigateByUrl('/farmer');
    //       this.router.navigate(['/farmer']);
    //     }
    //     else if (this.dataUser['statusUser'] == 2) {
    //       this.authService.login(result['data']['_id']); // setToken
    //       // this.router.navigateByUrl('/page-cooperative');
    //       this.router.navigate(['/page-cooperative']);
    //     }else if (this.dataUser['statusUser'] == 3) {
    //       this.authService.login(result['data']['_id']); // setToken
    //       // this.router.navigateByUrl('/page-guset-user');
    //       this.router.navigate(['/page-guset-user']);
    //     }
    //   }
    //   else {
    //     this.router.navigateByUrl('/login');
    //   }
    // });
  }
}
