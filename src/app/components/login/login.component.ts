import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }
  loginForm: any;
  isSubmitted = false;
  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
  }
  Click_sign_In() {
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
    this.apiService.read(data).subscribe((resposne: any) => {
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
        window.alert("รหัสผ่านไม่ถูกต้อง");
        this.router.navigateByUrl('/login');
      }
    });
  }
}
