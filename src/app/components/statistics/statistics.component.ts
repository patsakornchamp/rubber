import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements AfterViewInit, OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //กราฟ
    console.log("55555555555");
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
  ngAfterViewInit2() {
    console.log("6666666666666666666");
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);
  }
}
