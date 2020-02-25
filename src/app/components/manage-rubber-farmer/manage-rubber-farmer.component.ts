import { Component, OnInit, TemplateRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  constructor(private apiService: ApiService, private modalService: BsModalService, private authenticationService: AuthenticationService) { }

  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  IDUser: any;
  dataUser: any;
  demo: any;
  GET_Plantation: any;
  p: number = 1;
  latitude = 14.020740;
  longitude = 99.991194;
  locationChosen = false;
  map: google.maps.Map;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;


  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit() {
    // this.test();
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
      console.log(this.GET_Plantation);
    });
  }
  del_farm(data) {
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
// interface marker {
//   name: string,
//   lat: number,
//   lng: number,
//   draggable: boolean;
// }
