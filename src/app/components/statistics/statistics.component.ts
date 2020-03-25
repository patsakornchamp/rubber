import { Component, OnInit, AfterViewInit} from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
// declare const staticJS: any;
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements AfterViewInit, OnInit {
  modalRef: BsModalRef;

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  public lineChartData: ChartDataSets[] = [
    { 
      data: [
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00 ], 
      label: 'Year'
    },
    { 
      data: [
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00 ], 
      label: 'Year'
    }
  ];
  public lineChartLabels: Label[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,255,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private modalService: BsModalService,
    private apiService: ApiService,
    private authenticationService: AuthenticationService) { }
  /////////////////////////////////////////ตัวแปล
  demo: any;
  searhText:any;
  GET_Plantation: any;
  Plantation: any; Plantation2: any; IDPlantation: any; addressRubberPlantation: any; addressRubberPlantation2: any;
  IDUser: any;
  dataUser: any;
  row: any = 0;
  col: any = 0;
  YEAR: any;
  YEAR_cur: any;
  any_date : any;
  any_date_cur : any;
  any_date2 : any;
  any_date_cur2 : any;
  staticData: Array<any> = [];
  staticData_cur: Array<any> = [];
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_Plantation();
    this.get_year();
    this.any_date = 'Year';
    this.any_date2 = 'Year';
    this.any_date_cur = 'Year';
    this.any_date_cur2 = 'Year';
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngAfterViewInit(): void { //กราฟ
    // const script = document.createElement('script');
    // script.src = 'assets/js/chart.js';
    // document.body.appendChild(script);

    // staticJS();
  }

  staticGet(){
    let plan;
    console.log(this.any_date);
    for(let i = 0 ;i < this.GET_Plantation.length;i++){
      if(this.Plantation == this.GET_Plantation[i]['namePlantation']){
        plan = this.GET_Plantation[i]['IDPlantation'];
      }
    }
    if(this.any_date != null && plan != null){
      this.demo = {
        mod: "avgQuantity",
        value: {
            "IDPlantation": plan,
            "YEAR": this.any_date
        }
      };
      console.log(this.demo);
      this.apiService.read(this.demo).subscribe((resposne: any) => {
        this.staticData = []
        for(let i=0;i< 12; i++){
          this.staticData.push(resposne[i]['avgQuantity']);
        }
        console.log(this.staticData);
        this.lineChartData = [
          { 
            data: this.staticData_cur, label: this.any_date_cur
          },
          { 
            data: this.staticData, label: this.any_date 
          }
        ];
      });
    }
  }
  staticGet_cur(){
    let plan;
    console.log(this.any_date_cur);
    for(let i = 0 ;i < this.GET_Plantation.length;i++){
      if(this.Plantation == this.GET_Plantation[i]['namePlantation']){
        plan = this.GET_Plantation[i]['IDPlantation'];
      }
    }
    if(this.any_date_cur != null && plan != null){
      this.demo = {
        mod: "avgQuantity",
        value: {
            "IDPlantation": plan,
            "YEAR": this.any_date_cur
        }
      };
      console.log(this.demo);
      this.apiService.read(this.demo).subscribe((resposne: any) => {
        this.staticData_cur = []
        for(let i=0;i< 12; i++){
          this.staticData_cur.push(resposne[i]['avgQuantity']);
        }
        console.log(this.staticData_cur);
        this.lineChartData = [
          { 
            data: this.staticData_cur, label: this.any_date_cur 
          },
          { 
            data: this.staticData, label: this.any_date 
          }
        ];
      });
    }
  }

  next(e, id) {
    if (e.key == 'Enter') {
      document.getElementById(id).focus();
    }
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
      console.log(resposne);
      console.log("resposne");
    });
  }
  get_year() {
    this.demo = {
      mod: "get_year",
      value: {
        "IDUser": this.IDUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.YEAR = resposne;
      this.YEAR_cur = resposne;
      this.any_date_cur = this.YEAR[0]['date'];
      this.any_date_cur2 = this.YEAR[0]['date'];
      console.log(this.YEAR);
    });
  }
  click_Plantation(data) {
    this.Plantation = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.addressRubberPlantation = data.addressRubberPlantation;
    // this.searchPic_farm();
    this.staticGet();
    this.staticGet_cur()
    this.modalRef.hide();
  }
  searchPic(){
    this.searchPic_cur()
    let plan;
    console.log(this.any_date2);
    for(let i = 0 ;i < this.GET_Plantation.length;i++){
      if(this.Plantation2 == this.GET_Plantation[i]['namePlantation']){
        plan = this.GET_Plantation[i]['IDPlantation'];
      }
    } 
    if(this.any_date2 != null && plan != null){
      this.demo = {
        mod: "avgQuantity2",
        value: {
            "IDPlantation": plan,
            "YEAR": this.any_date2,
            "row": this.row,
            "col": this.col
        }
      };
      console.log(this.demo);
      this.apiService.read(this.demo).subscribe((resposne: any) => {
        this.staticData = []
        for(let i=0;i< 12; i++){
          this.staticData.push(resposne[i]['avgQuantity']);
        }
        console.log(this.staticData);
        this.lineChartData = [
          { 
            data: this.staticData_cur, label: this.any_date_cur2
          },
          { 
            data: this.staticData, label: this.any_date2
          }
        ];
      });
    }
  }
  searchPic_cur(){
    let plan;
    console.log(this.any_date_cur2);
    for(let i = 0 ;i < this.GET_Plantation.length;i++){
      if(this.Plantation2 == this.GET_Plantation[i]['namePlantation']){
        plan = this.GET_Plantation[i]['IDPlantation'];
      }
    } 
    if(this.any_date_cur2 != null && plan != null){
      this.demo = {
        mod: "avgQuantity2",
        value: {
            "IDPlantation": plan,
            "YEAR": this.any_date_cur2,
            "row": this.row,
            "col": this.col
        }
      };
      console.log(this.demo);
      this.apiService.read(this.demo).subscribe((resposne: any) => {
        this.staticData_cur = []
        for(let i=0;i< 12; i++){
          this.staticData_cur.push(resposne[i]['avgQuantity']);
        }
        console.log(this.staticData_cur);
        this.lineChartData = [
          { 
            data: this.staticData_cur, label: this.any_date_cur2
          },
          { 
            data: this.staticData, label: this.any_date2
          }
        ];
      });
    }
  }
  click_Plantation2(data) {
    this.Plantation2 = data.namePlantation;
    this.IDPlantation = data.IDPlantation;
    this.addressRubberPlantation2 = data.addressRubberPlantation;
    // this.searchPic_tree();
    this.any_date_cur2 = this.YEAR[0]['date'];
    this.searchPic_cur();
    this.searchPic();
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
    });
  }
  searchPic_tree() {
    this.demo = {
      mod: "searchPic_tree",
      item: {
        IDUser: this.IDUser,
        IDPlantation: this.IDPlantation,
        row: this.row,
        col: this.col
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {

    });
  }
}