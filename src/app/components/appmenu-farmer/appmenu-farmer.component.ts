import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';

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
    console.log("25555555555555");
    this.router.navigate(["/statistics"]);

  }
  Click_ManageRubberfarmer(){
    console.log("25555555555555");
    this.router.navigate(["/manage-rubber-farmer"]);

  }
  Click_farmer(){
    this.router.navigate(["/farmer"]);


  }
}
