import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { ApiService } from '../../api.sercice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-page-guest',
  templateUrl: './page-guest.component.html',
  styleUrls: ['./page-guest.component.css']
})
export class PageGuestComponent implements AfterViewInit, OnInit {
  constructor( private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService) { }
  zoom: number = 15;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  IDUser: any;
  dataUser: any;
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

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
  }
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
  name: string,
  lat: number,
  lng: number,
  draggable: boolean;
}