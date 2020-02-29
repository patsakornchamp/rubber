import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import { ApiService } from '../../api.sercice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-cooperative-manage',
  templateUrl: './page-cooperative-manage.component.html',
  styleUrls: ['./page-cooperative-manage.component.css']
})
export class PageCooperativeManageComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService) { }
  demo: any;
  GET_farm: any;
  GET_user_plant: any;
  IDUser: any;
  IDUser2: any;
  dataUser: any;
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_farm();
    this.get_user_plant();
  }
  get_farm() {
    this.demo = {
      mod: "get_farm",
      value: {
        "IDUser": this.IDUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_farm = resposne;

      console.log(this.GET_farm)
    });
  }
  get_user_plant() {
    this.demo = {
      mod: "get_user_plant"
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_user_plant = resposne;
      // console.log(resposne)
    });
  }
  add_user(data) {
    let data2 = {
      IDUser: this.IDUser,
      IDPlantation: data
    };
    console.log(data2)
    Swal.fire({
      title: 'ยืนยันการแก้ไข',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.demo = { mod: "add_user", value: data2 };
        this.apiService.update(this.demo).subscribe((resposne: any) => {
          this.get_user_plant();
          this.get_farm();
          Swal.fire(
            'แก้ไขเรียบร้อย', "",
            'success')
        });

        // this.router.navigateByUrl('/manage-rubber-farmer');
      }
    })
  }
  del_user(data) {
    Swal.fire({
      title: 'ต้องการลบ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        let del = {
          IDPlantation: data
        }
        this.demo = { mod: "del_user", value: del };
        this.apiService.update(this.demo).subscribe((resposne: any) => {
          this.get_user_plant();
          this.get_farm();
          Swal.fire(
            'ลบเรียบร้อยแล้ว',
            '',
            'success'
          )
        })
      }
    })
  }
}
