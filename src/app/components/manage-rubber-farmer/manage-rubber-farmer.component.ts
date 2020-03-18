import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import { ApiService } from '../../api.sercice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-rubber-farmer',
  templateUrl: './manage-rubber-farmer.component.html',
  styleUrls: ['./manage-rubber-farmer.component.css']
})
export class ManageRubberFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService) { }

  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 10.4782;
  //ลองติจูท
  lng = 99.1423;
  IDUser: any;
  dataUser: any;
  demo: any;
  GET_Plantation: any;
  latitude = 0;
  longitude = 0;
  dataset = {
    IDPlantation: null, namePlantation: null,
    addressRubberPlantation: null,
    latitude: null,
    longitude: null,
    detail: null,
  }
  locationChosen = false;
  markers2: Array<any>;
  map: google.maps.Map;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;


  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_Plantation();
  }
  get_Plantation() {
    this.demo = {
      mod: "getPlantation",
      value: {
        "IDUserF": this.IDUser
      }
    };

    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_Plantation = resposne;
    });
  }
  deletePlantation(data) {
    Swal.fire({
      title: 'ต้องการลบ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        let del = {
          IDPlantation: data,
        }
        this.demo = { mod: "deletePlantation", value: del };
        this.apiService.delete(this.demo).subscribe((resposne: any) => {
          Swal.fire(
            'ลบเรียบร้อยแล้ว',
            '',
            'success'
          )
          this.get_Plantation();
        })
      }
    })
  }
  edit_farm(data) {

    let markers: marker[] =
      [{
        IDPlantation: data.IDPlantation,
        namePlantation: data.namePlantation,
        addressRubberPlantation: data.addressRubberPlantation,
        latitude: data.latitude,
        longitude: data.longitude,
        detail: data.detail
      }];
    this.markers2 = markers;
    console.log(this.markers2);
  }
  updatePlantation() {
    let data = {
      namePlantation: this.markers2[0].namePlantation,
      addressRubberPlantation: this.markers2[0].addressRubberPlantation,
      detail: this.markers2[0].detail,
      latitude: this.markers2[0].latitude,
      longitude: this.markers2[0].longitude,
      IDPlantation: this.markers2[0].IDPlantation
    };
    Swal.fire({
      title: 'ยืนยันการแก้ไข',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.demo = { mod: "updatePlantation", value: data };
        this.apiService.update(this.demo).subscribe((resposne: any) => {        
          this.get_Plantation();
          Swal.fire(
            'แก้ไขเรียบร้อย', "",
            'success')
        });
        this.modalRef.hide();
        this.markers2 = [];
        // this.router.navigateByUrl('/manage-rubber-farmer');
      }
    })
  }
  //mapเปิด
  clickedMarker(m, i) {
    console.log(m, i);
  }
  //ขยับจุดมาค และส่งค่าจุดใหม่กลับมา
  markerDragEnd(m, e) {
    this.latitude = e.coords.lat;
    this.longitude = e.coords.lng;
  }
  mapClick(e) {
    this.markers2[0].latitude = e["coords"].lat;
    this.markers2[0].longitude = e["coords"].lng;
    // console.log(e["coords"].lat);
    // console.log(e["coords"].lng);
    // console.log(e);
  }
  //mapปิด
}
interface marker {
  IDPlantation: number,
  namePlantation: string,
  addressRubberPlantation: string,
  latitude: number,
  longitude: number,
  detail: string,
}