import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, TabsetComponent } from 'ngx-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements AfterViewInit, OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  constructor() { }
  test = ["แปลงA", "แปลงB", "แปลงC"];
  ngOnInit() {
  }


  ngAfterViewInit(): void {
    //กราฟ
    console.log("55555555555");
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
  SelectNext2(tabId: number) {
    this.staticTabs.tabs[tabId].disabled = false;
    this.staticTabs.tabs[tabId].active = true;
    if (tabId == 0) {
      this.ngAfterViewInit();
    }
    this.staticTabs.tabs[0].disabled = true;
    this.staticTabs.tabs[1].disabled = true;
    this.staticTabs.tabs[2].disabled = true;
  }
  next(e, id) {
    console.log('0000000')
    if (e.key == 'Enter') {
      document.getElementById(id).focus();
    }
  }
  searchPic(){
    console.log("22222222222222222");
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: 'Something went wrong!',
    //   footer: '<a href>Why do I have this issue?</a>'
    // })
    this.ngAfterViewInit();

  }

}
