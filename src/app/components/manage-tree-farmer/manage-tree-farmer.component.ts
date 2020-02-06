import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-tree-farmer',
  templateUrl: './manage-tree-farmer.component.html',
  styleUrls: ['./manage-tree-farmer.component.css']
})
export class ManageTreeFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  searhText:any;
  constructor(private modalService: BsModalService) {}
  //ตัวแปล
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
  dataSet: any = {
    Name_farmer:null
  };


  ngOnInit() {
  this.test();
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  farmer(data) {
        this.dataSet.Name_farmer = data.name;
        this.modalRef.hide();
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
