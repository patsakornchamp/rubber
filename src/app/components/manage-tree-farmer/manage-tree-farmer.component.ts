import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-tree-farmer',
  templateUrl: './manage-tree-farmer.component.html',
  styleUrls: ['./manage-tree-farmer.component.css']
})
export class ManageTreeFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
  }

}
