import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-user-farmer',
  templateUrl: './manage-user-farmer.component.html',
  styleUrls: ['./manage-user-farmer.component.css']
})
export class ManageUserFarmerComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }
  address:string = "60/5 หมู่ 4 ต.กำแพงแสน อ.กำแพงแสน จ.นครปฐม";
  ngOnInit() {
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
