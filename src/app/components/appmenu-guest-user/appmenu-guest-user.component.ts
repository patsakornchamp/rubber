import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-appmenu-guest-user',
  templateUrl: './appmenu-guest-user.component.html',
  styleUrls: ['./appmenu-guest-user.component.css']
})
export class AppmenuGuestUserComponent implements OnInit {
  constructor( private authenticationService: AuthenticationService ) { }
  name:string;
  dataUser: any;
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.name = this.dataUser[0]['name'];
  }

}
