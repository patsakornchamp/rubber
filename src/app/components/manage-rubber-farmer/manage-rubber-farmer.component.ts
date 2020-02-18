import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
// import { AccountService } from '../services/account_services';

@Component({
  selector: 'app-manage-rubber-farmer',
  templateUrl: './manage-rubber-farmer.component.html',
  styleUrls: ['./manage-rubber-farmer.component.css']
})
export class ManageRubberFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
   
  //mapสามารถเลือกจุดบนแผนที่ได้
    zoom: number = 15;
    //ละติจูท
    lat = 14.020740;
    //ลองติจูท
    lng = 99.991194;
    markers: marker[] = [
      {
        name: 'champ',
        lat: 14.020740,
        lng: 99.991194,
        draggable: true
      },
      {
        name: 'champ2',
        lat: 14.020750,
        lng: 99.991120,
        draggable: true
      },
      {
        name: 'champ3',
        lat: 14.020744,
        lng: 99.991155,
        draggable: true
      },
    ]
  
    latitude = 14.020740;
    longitude = 99.991194;
    locationChosen = false;
    map: google.maps.Map;
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  
  SEARCH: any = [{}, {}, {}];
  resposne: any = [1,2,3];
  A: any = [
    {
      name: 'สวนA',
      addressRubberPlantation:'ตรัง',
      numtree:'1000',
      latitude: 14.020740,
      longitude: 99.991194,
      detail: 'ไม่มี',
      nameFamer:'นายสมพง  จงเจริญ'
    },
    {
      name: 'สวนB',
      addressRubberPlantation:'ชุมพร',
      numtree:'1300',
      latitude: 14.020740,
      longitude: 99.991194,
      detail: 'ไม่มี',
      nameFamer:'นายสมลักษณ์ จงสำเร็จ'
    },
    {
      name: 'สวนC',
      addressRubberPlantation:'นครศรี',
      numtree:'1500',
      latitude: 14.020740,
      longitude: 99.991194,
      detail: 'ไม่มี',
      nameFamer:'นายประทาน  ฟ้าสีคราม'
    },
  ];
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit() {
    this.test();
  }

  test(){
    if (this.resposne.length > 10) {
      let pushfor = this.resposne.length - 10;
      for (let j = 0; j < pushfor; j++) {
        this.SEARCH.push({});
      }
    }
    for (let i = 0; i < this.resposne.length; i++) {
      this.SEARCH[i] = this.A[i];
    }
console.log(this.SEARCH)
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
interface marker {
  name: string,
  lat: number,
  lng: number,
  draggable: boolean;
}