import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenu-farmer',
  templateUrl: './appmenu-farmer.component.html',
  styleUrls: ['./appmenu-farmer.component.css']
})
export class AppmenuFarmerComponent implements OnInit {

  constructor(private router: Router) { }
  name:string="Patsakorn"
  ngOnInit() {
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
