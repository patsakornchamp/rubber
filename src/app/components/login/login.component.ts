import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Musername: string = "";
  Mpassword: string = "";
  constructor(private router: Router) { }

  ngOnInit() {

  }
  Click_sign_In() {
    // console.log('5555555+');
    if (this.Musername == "b5920502045" && this.Mpassword == "1234") {
      this.router.navigate(["/farmer"]);
    }
    else {
      window.alert("รหัสผ่านไม่ถูกต้อง");
    }
  }
  Click_Register(){
    // console.log('555555555')
    this.router.navigate(["/register"]);

  }

}
