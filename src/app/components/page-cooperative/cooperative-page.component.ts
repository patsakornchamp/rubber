import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { ApiService } from '../../api.sercice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
@Component({
  selector: 'app-cooperative-page',
  templateUrl: './cooperative-page.component.html',
  styleUrls: ['./cooperative-page.component.css']
})
export class CooperativePageComponent implements AfterViewInit, OnInit {
  modalRef: BsModalRef;

  constructor( private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService) { }
  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  markers: marker[];
  searhText:any;
  latitude = 14.020740;
  longitude = 99.991194;
  locationChosen = false;

  demo:any;
  GET_farm:any;
  IDUser: any;
  IDUser2:any;
  dataUser: any;
  //น้ำยางพารา
  Plantation: any; IDPlantation: any; latex_farm: any = 0; latex_tree: any = 0;
  // data_framer:any = {
  //   name:null,phoneNumber:null,addressUser:null
  // }
  map: google.maps.Map;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
    //googlemapp
  }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_farm()
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  get_farm() {
    this.demo = {
      mod: "get_farm",
      value: {
        "IDUser": this.IDUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_farm = resposne;
      this.markers =this.GET_farm;
      this.Plantation = null;
      this.latex_farm = 0;

      console.log(this.GET_farm)
    });
  }
  click_Plantation(data) {
    this.Plantation = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.IDUser2 =data.IDUserF;
    this.searchPic_farm();
    console.log( this.IDUser2)

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
      this.markers = resposne;
      if (this.latex_farm == null) {
        this.latex_farm = 0;
      }
    });
  }
  // getuser(){
  //   this.demo = {
  //     mod: "getuser",
  //     value: {
  //       "IDUser": this.IDUser2
  //     }
  //   };
  //   this.apiService.read(this.demo).subscribe((resposne: any) => {
  //     // this.latex_farm = resposne;
  //     this.data_framer.name = resposne[0].name;
  //     this.data_framer.phoneNumber = resposne[0].phoneNumber;
  //     this.data_framer.addressUser = resposne[0].addressUser;


  //     console.log(resposne)

  //   });
  // }

  //mapเปิด
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
  //mapปิด
}
interface marker {
  namePlantation: string,
  addressRubberPlantation: string,
  latitude: number,
  longitude: number,
  detail: string,
  name:string,
  phoneNumber:string
}