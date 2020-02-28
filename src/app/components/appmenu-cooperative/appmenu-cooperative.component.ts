import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-appmenu-cooperative',
  templateUrl: './appmenu-cooperative.component.html',
  styleUrls: ['./appmenu-cooperative.component.css']
})
export class AppmenuCooperativeComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService ) { }
  name:string;
  dataUser: any;


  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.name = this.dataUser[0]['name'];
  }

}
