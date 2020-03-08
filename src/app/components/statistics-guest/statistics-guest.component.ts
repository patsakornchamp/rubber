import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
@Component({
  selector: 'app-statistics-guest',
  templateUrl: './statistics-guest.component.html',
  styleUrls: ['./statistics-guest.component.css']
})
export class StatisticsGuestComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
    private apiService: ApiService,
    private authenticationService: AuthenticationService) { }
  demo:any;
  IDUser: any;
  IDUserF:any;
  name_user:any;
  addressUser:any;
  phoneNumber:any;
  namePlantation:any;IDPlantation:any;
  dataUser: any;
  GET_user_guest: any;
  SEARCH_plan_guest: any;
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
  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
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
    this.addressUser = data.addressUser;
    this.phoneNumber = data.phoneNumber;
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
    this.searchPic_farm();
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

}
