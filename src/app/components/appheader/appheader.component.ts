import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements AfterViewInit ,OnInit  {

  ngAfterViewInit(): void {
   const script = document.createElement('script');
   script.src = 'assets/js/chart.js';
   document.body.appendChild(script);
    
  }
  name:string = "Patsakorn";
  constructor() { }

  ngOnInit() {
    
  }
  inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /^[0-9]*$/;
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input

    }
  }

}
