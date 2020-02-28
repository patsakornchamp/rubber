import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import { ApiService } from '../../api.sercice';
import Swal from 'sweetalert2'; '@angular/core';

@Component({
  selector: 'app-page-guest-user',
  templateUrl: './page-guest-user.component.html',
  styleUrls: ['./page-guest-user.component.css']
})
export class PageGuestUserComponent implements OnInit {

  modalRef: BsModalRef;
  dataUser: any;

  dataUser2: any;
  demo: any;
  statistcs: any;
  statusUser: any;
  dataset2: any = {
    name: null,
    addressUser: null,
    phoneNumber: null,
    username: null,
    IDUser: null,
  };
  IDUser: any
  constructor(private modalService: BsModalService,
    private authenticationService: AuthenticationService,
    private apiService: ApiService, ) { }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.statusUser = this.dataUser[0]['statusUser'];
    this.getuser();

  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  getuser() {
    this.demo = {
      mod: "getuser",
      value: {
        "IDUser": this.IDUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.dataUser2 = resposne[0];
      if (this.statusUser == '1') {
        this.statistcs = 'เกษตกร';
      }
      else if (this.statusUser == '2') {
        this.statistcs = 'กระทรวงเกษตรและสหกรณ์';

      }
      else if (this.statusUser == '3') {
        this.statistcs = 'ผู้ใช้ทั่วไป';

      }
      // this.dataset2 = this.dataUser2;
      // console.log(this.dataset2);
    });
  }
  get_data(data) {
    this.dataset2.name = data.name;
    this.dataset2.addressUser = data.addressUser,
      this.dataset2.phoneNumber = data.phoneNumber,
      this.dataset2.username = data.username,
      this.dataset2.IDUser = data.IDUser
  }
  updateDataUser() {
    let data = {
      name: this.dataset2.name,
      addressUser: this.dataset2.addressUser,
      phoneNumber: this.dataset2.phoneNumber,
      username: this.dataset2.username,
      IDUser: this.dataset2.IDUser,
    };
    console.log("222222");
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
        this.demo = { mod: "updateDataUser", value: data };
        this.apiService.update(this.demo).subscribe((resposne: any) => {
          this.ngOnInit();
          Swal.fire(
            'แก้ไขเรียบร้อย', "",
            'success')
        });
        this.modalRef.hide();
        // this.router.navigateByUrl('/manage-rubber-farmer');
      }
    })
  }

}
