import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-rubber-add-farmer',
  templateUrl: './manage-rubber-add-farmer.component.html',
  styleUrls: ['./manage-rubber-add-farmer.component.css']
})
export class ManageRubberAddFarmerComponent implements OnInit {

  constructor(private modalService: BsModalService, private router: Router, private apiService: ApiService, private authenticationService: AuthenticationService) { }
  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;

  latitude = 14.020740;
  longitude = 99.991194;
  locationChosen = false;
  demo: any;
  IDUser: any;
  dataUser: any;
  map: google.maps.Map;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  dataset: any = { namePlantation: null, addressRubberPlantation: null, mapClick_lat: null, mapClick_lng: null, detail: null };


  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
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
  mapClick(e) {
    this.dataset.mapClick_lat = e["coords"].lat;
    this.dataset.mapClick_lng = e["coords"].lng;
    // console.log(e["coords"].lat);
    // console.log(e["coords"].lng);
    // console.log(e);
  }
  //mapปิด

  Add_Farm(e) {
    let data = {
      namePlantation: this.dataset.namePlantation,
      addressRubberPlantation: this.dataset.addressRubberPlantation,
      detail: this.dataset.detail,
      latitude: this.dataset.mapClick_lat,
      longitude: this.dataset.mapClick_lng,
      IDUserF: this.IDUser
    };
    Swal.fire({
      title: 'ยืนยันการบันทึก',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.demo = { mod: "insertPlantation", value: data };
        this.apiService.insert(this.demo).subscribe((resposne: any) => {
          Swal.fire(
            'บันทึกเรียบร้อย', "",
            'success')
        });
        this.dataset.namePlantation = null
        this.dataset.addressRubberPlantation = null
        this.dataset.detail = null
        this.dataset.mapClick_lat = null
        this.dataset.mapClick_lng = null
        this.router.navigateByUrl('/manage-rubber-farmer');
      }
    })
  }
  link(data) {
    if (data == '01') {
      this.router.navigate(["/manage-rubber-farmer"]);
    }
  }
}
interface marker {
  name: string,
  lat: number,
  lng: number,
  draggable: boolean;
}