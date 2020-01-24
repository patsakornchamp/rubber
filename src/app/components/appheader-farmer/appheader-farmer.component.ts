import { Component, OnInit ,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-appheader-farmer',
  templateUrl: './appheader-farmer.component.html',
  styleUrls: ['./appheader-farmer.component.css']
})
export class AppheaderFarmerComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

}
