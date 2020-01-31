import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccountService } from '../services/account_services';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements AfterViewInit, OnInit {
  //mapสามารถเลือกจุดบนแผนที่ได้
  // latitude = 14.020740;
  // longitude = 99.991194;
  // locationChosen =false;

  @ViewChild('map', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  // for (let i = 0; i < A.length; i++) {
  //   this.SEARCH[i] = this.LD_DET2[i];
  // }
  coordinates = new google.maps.LatLng(this.lat, this.lng);
 info = new google.maps.InfoWindow({
content: '<div>fffffffffffffffffffffffffffffffffffffffffffff</div>'
});
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom:15,
    
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    // title: this.info
  });


// test =new google.maps.event.addListener(
//   this.marker,'click'{

// });

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
    //googlemapp
    this.mapInitializer();
  }

  dataUser: any;
  name: any;
  test = ["แปลงA", "แปลงB", "แปลงC"];

  constructor(
    private data_User: AccountService
    ) { }

  ngOnInit() {
    // if(this.data_User.getUser() != null){
    //   this.dataUser = this.data_User.getUser();
    //   this.name = this.dataUser['name'];
    // }
    // else{
    //   this.name = "null";
    // }
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,this.mapOptions);
    this.marker.setMap(this.map);
    this.info.open(this.map,this.marker);
    // google.map.event.addListener(marker,'click',function()){}
  }
  
  // onChoseLocation(event){
  //   console.log(event);
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }

}
