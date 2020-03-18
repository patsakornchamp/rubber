import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-appheader-cooperative',
  templateUrl: './appheader-cooperative.component.html',
  styleUrls: ['./appheader-cooperative.component.css']
})
export class AppheaderCooperativeComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(  ) { }


  ngOnInit() {

  }
  logout(){

  }
}
