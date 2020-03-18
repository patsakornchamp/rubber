import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.sercice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  demo: any;
  registerForm: any;
  name: string = "";
  username: string = null;
  password: string = null;
  Repassword: string = "";
  address: string = "";
  phone: string = "";
  statusUser: string = "";
  GET_user_name: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.get_user_name();
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
  get_user_name() {
    this.username = null;

    this.demo = {
      mod: "get_user_name",
    };

    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_user_name = resposne;
      console.log(resposne);
    });
  }
  check_username(data) {
    
    for (let i = 0; i < this.GET_user_name.length; i++) {
        console.log(this.GET_user_name[i]);
        console.log(data);
      if (this.GET_user_name[i].username == data) {
        Swal.fire(
          'ชื่อผู้ใช้นี้มีคนใช้แล้ว',
          '',
          'success'
        )
        this.username=null;
      }
    }
  }

  onSubmit() {

    this.registerForm = {
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
    else {
      this.register(this.registerForm)
    }
  }

  register(registerData) {
    let data = {
      mod: "register",
      value: {
        "username": registerData.username,
        "password": registerData.password,
        "name": registerData.name,
        "addressUser": registerData.address,
        "statusUser": registerData.statusUser,
        "phoneNumber": registerData.phone
      }
    };
    console.log(data);
    this.apiService.insert(data).subscribe((resposne: any) => {
      if (resposne['status_Insert']) {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
