import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
@Component({
  selector: 'app-statistics-cooperative',
  templateUrl: './statistics-cooperative.component.html',
  styleUrls: ['./statistics-cooperative.component.css']
})
export class StatisticsCooperativeComponent implements OnInit {

  modalRef: BsModalRef;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  constructor(private modalService: BsModalService,
    private apiService: ApiService,
    private authenticationService: AuthenticationService) { }
  /////////////////////////////////////////ตัวแปล
  demo: any;
  GET_Plantation: any;
  Plantation: any; Plantation2: any; IDPlantation: any; addressRubberPlantation: any; addressRubberPlantation2: any;
  IDUser: any;
  dataUser: any;
  row: any = 0;
  col: any = 0;
  GET_farm:any;
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    // this.get_Plantation()
    this.get_farm()
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
  next(e, id) {
    if (e.key == 'Enter') {
      document.getElementById(id).focus();
    }
  }
  // get_Plantation() {
  //   this.demo = {
  //     mod: "getPlantation",
  //     value: {
  //       "IDUserF": "1"
  //     }
  //   };

  //   this.apiService.read(this.demo).subscribe((resposne: any) => {
  //     this.GET_Plantation = resposne;
  //     console.log(resposne);
  //     console.log("resposne");
  //   });
  // }
  get_farm() {
    this.demo = {
      mod: "get_farm",
      value: {
        "IDUser": this.IDUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_farm = resposne;

      console.log(this.GET_farm)
    });
  }
  click_Plantation(data) {
    this.Plantation = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.addressRubberPlantation = data.addressRubberPlantation;
    // this.searchPic_farm();
    this.modalRef.hide();
  }
  click_Plantation2(data) {
    this.Plantation2 = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.addressRubberPlantation2 = data.addressRubberPlantation;
    // this.searchPic_tree();
    this.modalRef.hide();
  }
  searchPic_farm() {
    this.demo = {
      mod: "searchPic_farm",
      item: {
        IDUser: this.IDUser,
        IDPlantation: this.IDPlantation
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
    });
  }
  searchPic_tree() {
    this.demo = {
      mod: "searchPic_tree",
      item: {
        IDUser: this.IDUser,
        IDPlantation: this.IDPlantation,
        row: this.row,
        col: this.col
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {

    });
  }
}