import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../services/account_services';
import { ApiService } from '../../api.sercice';
import { Marker } from '@agm/core';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements AfterViewInit, OnInit {
  constructor(
    private data_User: AccountService,
    private apiService: ApiService
  ) { }
  /////////////////////////////////////////ตัวแปล
  demo: any;
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


  // @ViewChild('map', { static: false }) gmap: ElementRef;

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;

  // for (let i = 0; i < A.length; i++) {
  //   this.SEARCH[i] = this.LD_DET2[i];
  // }  
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15,

  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });





  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
    //googlemapp
  }

  dataUser: any;
  name: any;
  test = ["แปลงA", "แปลงB", "แปลงC"];



  ngOnInit() {
    this.code_product()
  }

  // mapInitializer() {

  //   this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

  //   this.map = new google.maps.Map(this.gmap.nativeElement,
  //     this.mapOptions);

  //   this.marker.setMap(this.map);

  // }
  code_product() {
    this.demo = { 
      mod:"getPlantation",
      value: {
        "IDUserF":"1"
      }
    };
    this.apiService.readPolicies(this.demo).subscribe((resposne: any) => {
    // this.CODE_PRODUCT = resposne;
      console.log(resposne);
      console.log("resposne");
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
    console.log(this.latitude);

  }

}



interface marker {
  name: string,
  lat: number,
  lng: number,
  draggable: boolean;
}