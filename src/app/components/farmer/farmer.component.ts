import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ApiService } from '../../api.sercice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements AfterViewInit, OnInit {
  modalRef: BsModalRef;
  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService
  ) { }
  /////////////////////////////////////////ตัวแปล
  demo: any;
  GET_Plantation: any;
  IDUser: any;
  dataUser: any;
  row: any = 0;
  col: any = 0;
  lng_lat: any;
  searhText:any;
  searhText2:any;
  date = new Date();
  //mapสามารถเลือกจุดบนแผนที่ได้
  zoom: number = 5;
  //ละติจูท
  lat = 14.020740;
  //ลองติจูท
  lng = 99.991194;
  markers: marker[];
  latitude = 14.020740;
  longitude = 99.991194;
  p:number = 1;
  locationChosen = false;
   sum:any; 
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;

  ngAfterViewInit(): void {
    //กราฟ
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
    this.searchPic_map()
  }
  test:any = {sum:'',ded:''};
  Plantation: any; Plantation2: any; IDPlantation: any; latex_farm: any = 0; latex_tree: any = 0;
  dataset: any = {}
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_Plantation()
    console.log(this.test);
    this.p=1;
    this.latex_tree=[];
    this.Plantation2='';
    // console.log(this.IDUser)

  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
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
      console.log(this.GET_Plantation)
    });
  }
  click_Plantation(data) {
    this.Plantation = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.searchPic_farm();
    this.modalRef.hide();
  }
  undefined(){
    this.searhText = '';
    this.searhText2 = '';
    this.modalRef.hide();

  }
  chack(){
    if(this.Plantation2 == ''){
      Swal.fire(
        'กรุณาเลือกแปลง', '',
        'error')
        this.searhText2 = '';
    }
  }
  click_Plantation2(data) {
    this.Plantation2 = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.searchPic_tree();
    this.modalRef.hide();
  }
  searchPic_farm() {
    this.demo = {
      mod: "searchPic_farm",
      item: {
        IDUser: this.IDUser,
        IDPlantation: this.IDPlantation
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.latex_farm = resposne[0].sumquantity;
      if (this.latex_farm == null) {
        this.latex_farm = 0;
      }
    });
  }
  aa :any
  searchPic_tree() {
    this.demo = {
      mod: "searchPic_tree",
      item: {
        IDUser: this.IDUser,
        IDPlantation: this.IDPlantation
      }
    };

  
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.latex_tree = resposne;

      for(let i = 0;i <=  this.latex_tree.length;i++){
      //   this.latex_tree[i].sum = i;

      this.aa.push(this.latex_tree[i])
      }
      console.log(this.aa);
    });
  }
  searchPic_map() {
    this.demo = {
      mod: "searchPic_map",
      item: {
        IDUser: this.IDUser,
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.markers = resposne;

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
  }
}
interface marker {
  namePlantation: string,
  addressRubberPlantation: string,
  latitude: number,
  longitude: number,
  detail: string,
}
