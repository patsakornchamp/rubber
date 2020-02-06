import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../services/account_services';
@Component({
  selector: 'app-guest-user-page',
  templateUrl: './guest-user-page.component.html',
  styleUrls: ['./guest-user-page.component.css']
})
export class GuestUserPageComponent implements AfterViewInit,OnInit {

  constructor(private data_User: AccountService) { }
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

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
  ngOnInit() {
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