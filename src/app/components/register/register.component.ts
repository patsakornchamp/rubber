import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from '../_helper/must-match.validator';
import { Router } from  '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  name: string = "";
  username: string = "";
  password: string = "";
  address: string = "";
  phone: string = "";
  statusUser: string = "";
  constructor(
    private http : HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      // validator: MustMatch('password', 'confirmPassword')
    });
  }
  inputValidator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }

  onSubmit() {
    this.registerForm  =  {
      name: this.name,
      username: this.username,
      password: this.password,
      address: this.address,
      phone: this.phone,
      statusUser: this.statusUser
    };
    if (
      this.name == null || this.name == "" ||
      this.username == null || this.username == "" ||
      this.password == null || this.password == "" ||
      this.address == null || this.address == "" ||
      this.phone == null || this.phone == "" ||
      this.statusUser == null || this.statusUser == ""
      ) {
        alert('กรูณากรอกข้อมูลให้ครบ')
        return;
      }
      else{
        this.register(this.registerForm)
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm))
        this.router.navigateByUrl('/login');
      }
  }

  register(registerData){
    let data = { 
      username: registerData.username,
      password: registerData.password,
      name:     registerData.name,
      address:  registerData.address,
      statusUser: registerData.statusUser,
      statusConfirm : 0,
      phone:    registerData.phone
    };
    console.log(data);
    this.http.post<any>('http://localhost:3000/api/get/register', data).subscribe(result=>{
      alert(JSON.stringify(result));
    });
  }
}
