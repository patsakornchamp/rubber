import { Component, OnInit, TemplateRef, ViewChild, ElementRef,NgZone  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
import { Router } from '@angular/router';
import { MapsAPILoader, MouseEvent } from '@agm/core';


@Component({
  selector: 'app-manage-rubber-add-farmer',
  templateUrl: './manage-rubber-add-farmer.component.html',
  styleUrls: ['./manage-rubber-add-farmer.component.css']
})
export class ManageRubberAddFarmerComponent implements OnInit {

  constructor(private modalService: BsModalService, private router: Router, private apiService: ApiService, private authenticationService: AuthenticationService, 
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone ) { }
  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;

  // latitude = 14.020740;
  // longitude = 99.991194;
  latitude: number;
  longitude: number;
  address: string;
  private geoCoder;

  locationChosen = false;
  demo: any;
  IDUser: any;
  dataUser: any;
  map: google.maps.Map;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild('search', { static: false })  public searchElementRef: ElementRef;

  dataset: any = { tumbol:null,amphoe:null,province:null,namePlantation: null, addressRubberPlantation: null, mapClick_lat: null, mapClick_lng: null, detail: null };


  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];

     //load Places Autocomplete
     this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 5;
        });
      });
    });
  }

  // markerDragEnd($event: MouseEvent) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 6;
          this.address = results[0].formatted_address;
          console.log( results[0].address_components[1].long_name)
          console.log( results[0].address_components[2].long_name)
          console.log( results[0].address_components[3].long_name)
          for(let i = 0;i < results[0].address_components.length;i++){
            if(results[0].address_components[i].types[0] == "locality" || results[0].address_components[i].types[0] == "political"){
              this.dataset.tumbol = results[0].address_components[i].long_name;
              this.dataset.tumbol = this.dataset.tumbol.replace("ตำบล","");
              this.dataset.tumbol = this.dataset.tumbol.replace(" ","");
            }
            if(results[0].address_components[i].types[0] == "administrative_area_level_2"){
              this.dataset.amphoe = results[0].address_components[i].long_name;
              this.dataset.amphoe = this.dataset.amphoe.replace("อำเภอ","");
              this.dataset.amphoe = this.dataset.amphoe.replace(" ","");
            }
            if(results[0].address_components[i].types[0] == "administrative_area_level_1"){
              this.dataset.province = results[0].address_components[i].long_name;
              this.dataset.province = this.dataset.province.replace("จังหวัด","");
              this.dataset.province = this.dataset.province.replace(" ","");
            }
          }
          // this.dataset.tumbol = results[0].address_components[1].long_name;
          // this.dataset.amphoe = results[0].address_components[2].long_name;
          // this.dataset.province = results[0].address_components[3].long_name;

          // var res = this.dataset.tumbol.substring(4, );
          // var res = this.dataset.amphoe.substring(5, );

          // console.log(res);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  //mapเปิด
  clickedMarker(m, i) {
    console.log(m, i);
  }
  //ขยับจุดมาค และส่งค่าจุดใหม่กลับมา

  // markerDragEnd(m, e) {
  //   console.log(m, e);
  //   this.latitude = e.coords.lat;
  //   this.longitude = e.coords.lng;
  //   console.log(this.latitude);
  // }
  mapClick(e) {
    this.dataset.mapClick_lat = e["coords"].lat;
    this.dataset.mapClick_lng = e["coords"].lng;
    this.latitude=this.dataset.mapClick_lat;
    this.longitude=this.dataset.mapClick_lng;
    this.getAddress(this.latitude, this.longitude);
    }
  //mapปิด

  Add_Farm(e) {
    let data = {
      namePlantation: this.dataset.namePlantation,
      addressRubberPlantation: this.dataset.addressRubberPlantation,
      detail: this.dataset.detail,
      latitude: this.dataset.mapClick_lat,
      longitude: this.dataset.mapClick_lng,
      SubDistrict: this.dataset.tumbol,
      district: this.dataset.amphoe,
      province : this.dataset.province,
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
            this.router.navigateByUrl('/manage-rubber-farmer');

        });
        this.dataset.namePlantation = null
        this.dataset.addressRubberPlantation = null
        this.dataset.detail = null
        this.dataset.tumbol = null
        this.dataset.amphoe = null
        this.dataset.province = null
        this.dataset.mapClick_lat = null
        this.dataset.mapClick_lng = null
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