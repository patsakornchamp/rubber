import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
@Component({
  selector: 'app-statistics-now',
  templateUrl: './statistics-now.component.html',
  styleUrls: ['./statistics-now.component.css']
})
export class StatisticsNowComponent implements AfterViewInit, OnInit {
  modalRef: BsModalRef;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  constructor(private modalService: BsModalService,
    private apiService: ApiService,
    private authenticationService: AuthenticationService) { }
  /////////////////////////////////////////ตัวแปล
  demo: any;
  staticData: Array<any> = [];
  IDUserF: any;
  GET_user_guest: any;
  SEARCH_plan_guest: any;
  IDUser: any;
  name_user: any;
  dataUser: any;
  namePlantation: any;
  IDPlantation: any;
  searhText:any;
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_user_guest();
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngAfterViewInit(): void { //กราฟ
    this.demo = {
      mod: "avgQuantity",
      value: {
        "IDPlantation": 1,
        "YEAR": 2020
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      // console.log(resposne);
      for (let i = 0; i < 12; i++) {
        this.staticData.push(resposne[i]['avgQuantity']);
      }
      // console.log(this.staticData);
    });

    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);

    // staticJS();
  }
  get_user_guest() {
    this.demo = {
      mod: "get_user_guest"
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_user_guest = resposne;
      console.log(this.GET_user_guest)
    });
  }
  click_user_guest(data) {
    this.IDUserF = data.IDUser;
    this.name_user = data.name;
    this.namePlantation = null;
    this.searchPic_plan_guest();
    this.modalRef.hide();
  }
  searchPic_plan_guest() {
    this.demo = {
      mod: "searchPic_plan_guest",
      item: {
        IDUserF: this.IDUserF
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.SEARCH_plan_guest = resposne;
      console.log(this.SEARCH_plan_guest);
    });
  }
  click_plan_guest(data) {
    this.namePlantation = data.namePlantation
    this.IDPlantation = data.IDPlantation
    this.search_rubberproduct();
    this.modalRef.hide();
  }
  search_rubberproduct() {
    console.log('รอข้อมูล')
  }
}
