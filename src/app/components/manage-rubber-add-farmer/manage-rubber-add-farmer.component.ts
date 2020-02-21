import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-rubber-add-farmer',
  templateUrl: './manage-rubber-add-farmer.component.html',
  styleUrls: ['./manage-rubber-add-farmer.component.css']
})
export class ManageRubberAddFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
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

  ngOnInit() {
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