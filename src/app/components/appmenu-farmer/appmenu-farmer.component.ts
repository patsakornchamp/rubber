import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-appmenu-farmer',
  templateUrl: './appmenu-farmer.component.html',
  styleUrls: ['./appmenu-farmer.component.css']
})
export class AppmenuFarmerComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }
    name:string;
    dataUser: any;

  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.name = this.dataUser[0]['name'];
    // if(this.data_User.getUser() != null){
    //   this.dataUser = this.data_User.getUser();
    //   this.name = this.dataUser['name'];
    // }
    // else{
    //   this.name = "ไม่มีข้อมูล";
    // }
  }
  Click_statistics(){
    this.router.navigate(["/statistics"]);

  }
  Click_ManageRubberfarmer(){
    this.router.navigate(["/manage-rubber-farmer"]);
  }
  Click_farmer(){
    this.router.navigate(["/farmer"]);


  }
  link(data){
    if(data == '01'){
      this.router.navigate(["/farmer"]);
    }
    else if(data == '02'){
      this.router.navigate(["/statistics"]);

    }
    else if(data == '03'){
      this.router.navigate(["/manage-rubber-farmer"]);
    }
    else if(data == '04'){
      this.router.navigate(["/manage-tree-farmer"]);
    }
    else if(data == '05'){
      this.router.navigate(["/manage-user-farmer"]);
    }
  }

}
