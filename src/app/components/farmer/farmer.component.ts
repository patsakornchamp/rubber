import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ApiService } from '../../api.sercice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';

import { Marker } from '@agm/core';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements AfterViewInit, OnInit {
  modalRef: BsModalRef;
  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService
  ) { }
  /////////////////////////////////////////ตัวแปล
  demo: any;
  GET_Plantation: any;
  IDUser: any;
  dataUser: any;
  row: any = 0;
  col: any = 0;
  lng_lat: any;
  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  markers: marker[];
  latitude = 14.020740;
  longitude = 99.991194;
  locationChosen = false;

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
    this.searchPic_map()

  }
  Plantation: any; Plantation2: any; IDPlantation: any; latex_farm: any = 0; latex_tree: any = 0;
  dataset: any = {}
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_Plantation()
    // console.log(this.IDUser)

  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  get_Plantation() {
    this.demo = {
      mod: "getPlantation",
      value: {
        "IDUserF": "1"
      }
    };

    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_Plantation = resposne;
    });
  }
  click_Plantation(data) {
    this.Plantation = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.searchPic_farm();
    this.modalRef.hide();
  }
  click_Plantation2(data) {
    this.Plantation2 = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.searchPic_tree();
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
      this.latex_farm = resposne[0].sumquantity;
      if (this.latex_farm == null) {
        this.latex_farm = 0;
      }
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
      this.latex_tree = resposne[0].sumquantity;
      if (this.latex_tree == null) {
        this.latex_tree = 0;
      }
    });
  }
  searchPic_map() {
    this.demo = {
      mod: "searchPic_map",
      item: {
        IDUser: this.IDUser,
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.markers = resposne;

    });
  }

  clickedMarker(m, i) {
    console.log(m, i);
  }
  //ขยับจุดมาค และส่งค่าจุดใหม่กลับมา
  markerDragEnd(m, e) {
    console.log(m, e);
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
  }
}
interface marker {
  namePlantation: string,
  addressRubberPlantation: string,
  latitude: number,
  longitude: number,
  detail: string,
}
