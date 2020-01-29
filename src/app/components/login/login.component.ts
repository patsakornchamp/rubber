import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { AccountService } from '../services/account_services';

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
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private data_User: AccountService
  ) { }
  loginForm: any;
  isSubmitted = false;
  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
    // this.loginForm  =  this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
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
      username: loginForm.username,
      password: loginForm.password
    };
    console.log(data);
    this.http.post<any>('http://localhost:3000/api/get/login/', data).subscribe(result => {
      console.log(result);
      this.dataUser = result['data'];
      this.data_User.setUser(this.dataUser);
      if(this.dataUser != null && this.dataUser['statusConfirm'] == 1){
        if (this.dataUser['statusUser'] == 1) {
          this.authService.login(result['data']['_id']); // setToken
          // this.router.navigateByUrl('/farmer');
          this.router.navigate(['/farmer']);
        }
        else if (this.dataUser['statusUser'] == 2) {
          this.authService.login(result['data']['_id']); // setToken
          // this.router.navigateByUrl('/cooperative');
          this.router.navigate(['/cooperative']);
        }else if (this.dataUser['statusUser'] == 3) {
          this.authService.login(result['data']['_id']); // setToken
          // this.router.navigateByUrl('/guset-user');
          this.router.navigate(['/guset-user']);
        }else if (this.dataUser['statusUser'] == 4) {
          this.authService.login(result['data']['_id']); // setToken
          // this.router.navigateByUrl('/admin');
          this.router.navigate(['/page-admin']);
        }
      }
      else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
