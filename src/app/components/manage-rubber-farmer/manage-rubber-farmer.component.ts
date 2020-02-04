import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-rubber-farmer',
  templateUrl: './manage-rubber-farmer.component.html',
  styleUrls: ['./manage-rubber-farmer.component.css']
})
export class ManageRubberFarmerComponent implements OnInit {

  constructor() { }
  SEARCH: any = [{}, {}, {}];
  resposne: any = [1,2,3]
  A: any = [
    {
      name: 'สวนA',
      addressRubberPlantation:'ตรัง',
      numtree:'1000',
      latitude: 14.020740,
      longitude: 99.991194,
      detail: 'ไม่มี'
    },
    {
      name: 'สวนB',
      addressRubberPlantation:'ชุมพร',
      numtree:'1300',
      latitude: 14.020740,
      longitude: 99.991194,
      detail: 'ไม่มี'
    },
    {
      name: 'สวนC',
      addressRubberPlantation:'นครศรี',
      numtree:'1500',
      latitude: 14.020740,
      longitude: 99.991194,
      detail: 'ไม่มี'
    },
  ]

  ngOnInit() {
    this.test();
  }

  test(){
    if (this.resposne.length > 10) {
      let pushfor = this.resposne.length - 10;
      for (let j = 0; j < pushfor; j++) {
        this.SEARCH.push({});
      }
    }
    for (let i = 0; i < this.resposne.length; i++) {
      this.SEARCH[i] = this.A[i];
    }
console.log(this.SEARCH)
  }

}
