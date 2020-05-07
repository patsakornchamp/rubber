import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ApiService } from '../../api.sercice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import Swal from 'sweetalert2';


import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

let ELEMENT_DATA;

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})

export class FarmerComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['row', 'col', 'species', 'datePlant', 'quantity'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  modalRef: BsModalRef;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
    this.latex_tree=[];
    this.Plantation2='';
    // console.log(this.IDUser)
    ELEMENT_DATA = [];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  UF(){
    this.searhText = '';
    this.searhText2 = '';
    this.modalRef.hide();

  }
  chack(){
    console.log('sssssssssssssssssssssss');
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

      ELEMENT_DATA = this.latex_tree;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(ELEMENT_DATA)



      // for(let i = 0;i <=  this.latex_tree.length;i++){
      // }
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
