import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-statistics-now',
  templateUrl: './statistics-now.component.html',
  styleUrls: ['./statistics-now.component.css']
})
export class StatisticsNowComponent implements AfterViewInit, OnInit {
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
  IDUserF: any;
  GET_user_guest: any;
  SEARCH_plan_guest: any;
  IDUser: any;
  name_user: any;
  dataUser: any;
  namePlantation: any;
  IDPlantation: any;
  searhText:any;
  YEAR: any;
  YEAR_cur: any;
  any_date :any;
  any_date_cur : any;
  staticData: Array<any> = [];
  staticData_cur: Array<any> = [];
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_user_guest();
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
    for(let i = 0 ;i < this.SEARCH_plan_guest.length;i++){
      if(this.namePlantation == this.SEARCH_plan_guest[i]['namePlantation']){
        plan = this.SEARCH_plan_guest[i]['IDPlantation'];
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
        // console.log(resposne);
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
    for(let i = 0 ;i < this.SEARCH_plan_guest.length;i++){
      if(this.namePlantation == this.SEARCH_plan_guest[i]['namePlantation']){
        plan = this.SEARCH_plan_guest[i]['IDPlantation'];
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
  get_year(idUser) {
    console.log(idUser);
    this.demo = {
      mod: "get_year",
      value: {
        "IDUser": idUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.YEAR = resposne;
      this.YEAR_cur = resposne
      this.any_date_cur = this.YEAR[0]['date'];
      this.staticGet_cur()
      console.log(this.YEAR);
    });
  }
  get_user_guest() {
    this.demo = {
      mod: "get_user_guest"
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_user_guest = resposne;
      console.log(this.GET_user_guest)
    });
  }
  click_user_guest(data) {
    this.IDUserF = data.IDUser;
    this.name_user = data.name;
    this.namePlantation = null;
    this.searchPic_plan_guest();
    this.modalRef.hide();
  }
  searchPic_plan_guest() {
    this.any_date_cur = 'Year';
    this.any_date = 'Year';
    this.YEAR = [];
    this.YEAR_cur = [];
    this.demo = {
      mod: "searchPic_plan_guest",
      item: {
        IDUserF: this.IDUserF
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.SEARCH_plan_guest = resposne;
      console.log(this.SEARCH_plan_guest);
    });
    this.staticData_cur = [
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00 
    ]
    this.staticData = [
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
      0.00, 0.00, 0.00, 0.00, 0.00, 0.00 
    ]
    this.lineChartData = [
      { 
        data: this.staticData_cur, label: this.any_date_cur 
      },
      { 
        data: this.staticData, label: this.any_date 
      }
    ];
  }
  click_plan_guest(data) {
    this.namePlantation = data.namePlantation
    this.IDPlantation = data.IDPlantation
    this.search_rubberproduct();
    for(let i = 0 ;i < this.SEARCH_plan_guest.length;i++){
      if(this.namePlantation == this.SEARCH_plan_guest[i]['namePlantation']){
        console.log(this.SEARCH_plan_guest[i]['IDUser']);
        this.get_year(this.SEARCH_plan_guest[i]['IDUser']);
      }
    }
    this.staticGet();
    this.modalRef.hide();
  }
  search_rubberproduct() {
    console.log('รอข้อมูล')
  }
  default_static(){
    this.lineChartData = [
      { 
        data: this.staticData_cur, label: this.any_date_cur
      },
      { 
        data: [
          0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
          0.00, 0.00, 0.00, 0.00, 0.00, 0.00 
        ], label: this.any_date 
      }
    ];
  }
}
