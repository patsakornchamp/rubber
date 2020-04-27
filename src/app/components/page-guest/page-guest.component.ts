import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ApiService } from '../../api.sercice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';

@Component({
  selector: 'app-page-guest',
  templateUrl: './page-guest.component.html',
  styleUrls: ['./page-guest.component.css']
})
export class PageGuestComponent implements AfterViewInit, OnInit {
  constructor(private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService) { }
  modalRef: BsModalRef;
  zoom: number = 15;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  IDUser: any;
  demo: any;
  IDUserF: any;
  GET_user_guest: any;
  SEARCH_plan_guest: any;
  namePlantation: any;
  name_user: any;
  dataUser: any;
  Plantation: any; IDPlantation: any; latex_farm: any = 0; latex_tree: any = 0;
  markers: marker[];
  searhText:any;
  address:any;
  phone:any;
  date = new Date();
  latitude = 14.020740;
  longitude = 99.991194;
  locationChosen = false;
  map: google.maps.Map;
  p: number= 1;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_user_guest();
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

  searchPic_plan_guest() {
    this.demo = {
      mod: "searchPic_plan_guest",
      item: {
        IDUserF: this.IDUserF
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.SEARCH_plan_guest = resposne;
      this.markers = this.SEARCH_plan_guest;
      console.log(this.SEARCH_plan_guest);
    });
  }
  searchPic_farm() {
    this.demo = {
      mod: "searchPic_farm2",
      item: {
        IDUser: this.IDUserF
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.latex_farm = resposne;
      console.log( this.latex_farm);
      this.markers = resposne;
    });
  }
  
  click_user_guest(data) {
    this.IDUserF = data.IDUser;
    this.name_user = data.name;
    this.namePlantation = null;
    this.latex_farm = 0;
    this.searchPic_plan_guest();
    this.modalRef.hide();
    this.address = data.addressUser;
    this.phone = data.phoneNumber;
    this.searchPic_farm();

  }
  // click_plan_guest(data) {
  //   this.namePlantation = data.namePlantation
  //   this.IDPlantation = data.IDPlantation
  //   this.searchPic_farm();
  //   this.modalRef.hide();
  // }

  clickedMarker(m, i) {
    console.log(m, i);
  }
  //ขยับจุดมาค และส่งค่าจุดใหม่กลับมา
  markerDragEnd(m, e) {
    console.log(m, e);
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
    console.log(this.latitude);
  }
}
interface marker {
  namePlantation: string,
  addressRubberPlantation: string,
  latitude: number,
  longitude: number,
  detail: string,
  name: string,
  phoneNumber: string
}