import { Component, OnInit, TemplateRef, ViewChild, ElementRef,NgZone,AfterViewInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import { ApiService } from '../../api.sercice';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MapsAPILoader, MouseEvent } from '@agm/core';

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
    private authenticationService: AuthenticationService, private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 10.4782;
  //ลองติจูท
  lng = 99.1423;

  latitude: number;
  longitude: number;
  address: string;
  private geoCoder;

  IDUser: any;
  dataUser: any;
  demo: any;
  GET_Plantation: any;

  dataset = {
    IDPlantation: null, namePlantation: null,
    addressRubberPlantation: null,
    latitude: null,
    longitude: null,
    tumbol:null,
    amphoe:null,
    province:null,
    detail: null,
  }
  locationChosen = false;
  markers2: Array<any>;
  map: google.maps.Map;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild('search', { static: true })  public searchElementRef: ElementRef;


  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  ngAfterViewInit(): void {
    this.get_Plantation();

  }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_Plantation();

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
 // Get Current Location Coordinates

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
              this.markers2[0].SubDistrict = results[0].address_components[i].long_name;
              this.markers2[0].SubDistrict =  this.markers2[0].SubDistrict.replace("ตำบล","");
              this.markers2[0].SubDistrict =  this.markers2[0].SubDistrict.replace(" ","");
            }
            if(results[0].address_components[i].types[0] == "administrative_area_level_2"){
              this.markers2[0].district = results[0].address_components[i].long_name;
              this.markers2[0].district = this.markers2[0].district.replace("อำเภอ","");
              this.markers2[0].district= this.markers2[0].district.replace(" ","");
            }
            if(results[0].address_components[i].types[0] == "administrative_area_level_1"){
              this.markers2[0].province = results[0].address_components[i].long_name;
              this.markers2[0].province = this.markers2[0].province.replace("จังหวัด","");
              this.markers2[0].province = this.markers2[0].province.replace(" ","");
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
        detail: data.detail,
        SubDistrict:data.SubDistrict,
        district:data.district,
        province:data.province
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
      SubDistrict: this.markers2[0].SubDistrict,
      district: this.markers2[0].district,
      province : this.markers2[0].province,
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
    this.latitude=this.markers2[0].latitude;
    this.longitude=this.markers2[0].longitude;
    this.getAddress(this.latitude, this.longitude);
  }
  //mapปิด
  
  link(data) {
    if (data == '01') {
      this.router.navigate(["/manage-rubber-add-farmer"]);
    }
  }
}
interface marker {
  IDPlantation: number,
  namePlantation: string,
  addressRubberPlantation: string,
  latitude: number,
  longitude: number,
  detail: string,
  SubDistrict:string,
  district:string,
  province:string,
}