import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user-farmer',
  templateUrl: './manage-user-farmer.component.html',
  styleUrls: ['./manage-user-farmer.component.css']
})
export class ManageUserFarmerComponent implements OnInit {

  constructor() { }
  address:string = "60/5 หมู่ 4 ต.กำแพงแสน อ.กำแพงแสน จ.นครปฐม";
  ngOnInit() {
  }

}
