import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenu-cooperative',
  templateUrl: './appmenu-cooperative.component.html',
  styleUrls: ['./appmenu-cooperative.component.css']
})
export class AppmenuCooperativeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  name: string;
  dataUser: any;


  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.name = this.dataUser[0]['name'];
  }

  link(data) {
    if (data == '01') {
      this.router.navigate(["/page-cooperative"]);
    }
    else if (data == '02') {
      this.router.navigate(["/statistics-cooperative"]);

    }
    else if (data == '03') {
      this.router.navigate(["/page-cooperative-manage"]);
    }
    else if (data == '04') {
      this.router.navigate(["/page-cooperative-user"]);
    }
  }
}
