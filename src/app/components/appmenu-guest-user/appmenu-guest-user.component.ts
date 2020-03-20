import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenu-guest-user',
  templateUrl: './appmenu-guest-user.component.html',
  styleUrls: ['./appmenu-guest-user.component.css']
})
export class AppmenuGuestUserComponent implements OnInit {
  constructor( private authenticationService: AuthenticationService,private router: Router ) { }
  name:string;
  dataUser: any;
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.name = this.dataUser[0]['name'];
  }
  link(data){
    if(data == '01'){
      this.router.navigate(["/page-guset"]);
    }
    else if(data == '02'){
      this.router.navigate(["/statistics-now"]);

    }
    else if(data == '03'){
      this.router.navigate(["/page-guest-user"]);
    }
 
  }
}
