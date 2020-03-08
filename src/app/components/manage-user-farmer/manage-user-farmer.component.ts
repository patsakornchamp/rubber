import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../_services';
import { ApiService } from '../../api.sercice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-user-farmer',
  templateUrl: './manage-user-farmer.component.html',
  styleUrls: ['./manage-user-farmer.component.css']
})
export class ManageUserFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  dataUser: any;

  dataUser2: any;
  demo: any;
  statistcs: any;
  statusUser: any;
  data1: any;
  dataset2: any = {
    name: null,
    addressUser: null,
    phoneNumber: null,
    username: null,
    password: null,
    password_new: '',
    password_new2: '',
    IDUser: null,
  };
  equipment: any;
  equipment_Item: any;
  IDUser: any
  constructor(private modalService: BsModalService,
    private authenticationService: AuthenticationService,
    private apiService: ApiService, ) { }
  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.statusUser = this.dataUser[0]['statusUser'];
    this.getuser();
    this.get_equipment();

  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  get_equipment() {
    this.demo = {
      mod: "get_equipment",
      value: {
        "IDUser": this.IDUser
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.equipment = resposne;
      console.log(resposne);
    });
  }
  insertequipment() {
    if (this.equipment_Item != null) {
      let data = {
        userID: this.IDUser,
        equipment_Item: this.equipment_Item
      };
      Swal.fire({
        title: 'ยืนยันการบันทึก',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.demo = { mod: "insertequipment", value: data };
          this.apiService.insert(this.demo).subscribe((resposne: any) => {
            this.get_equipment();
            Swal.fire(
              'บันทึกเรียบร้อย', "",
              'success')
          });
          this.equipment_Item = null;
        }
      })
    }
    else {
      Swal.fire(
        'กรุณากรอกรหัสอุปกรณ์', '',
        'error')
    }
  }
  deleteequipment(data) {
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
          equipmentID: data,
        }
        this.demo = { mod: "deleteequipment", value: del };
        this.apiService.delete(this.demo).subscribe((resposne: any) => {
          Swal.fire(
            'ลบเรียบร้อยแล้ว',
            '',
            'success'
          )
          this.get_equipment();
        })
      }
    })
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
    this.dataset2.password = data.password

  }
  chack_pass() {
    if (this.dataset2.password_new != '' && this.dataset2.password_new2 != '') {
      if (this.dataset2.password_new != this.dataset2.password_new2) {
        this.dataset2.password_new = '';
        this.dataset2.password_new2 = '';
        document.getElementById('01').focus();
        Swal.fire(
          'รหัสผ่านไม่ตรงกัน', '',
          'error')
      }
    }
  }
  updateDataUser() {
    if (this.dataset2.password_new == '' && this.dataset2.password_new2 != '') {
      document.getElementById('01').focus();
      this.dataset2.password_new = '';
      this.dataset2.password_new2 = '';
      Swal.fire(
        'รหัสผ่านไม่ตรงกัน', '',
        'error')
      return;
    }
    else if (this.dataset2.password_new != '' && this.dataset2.password_new2 == '') {
      document.getElementById('01').focus();
      this.dataset2.password_new = '';
      this.dataset2.password_new2 = '';
      Swal.fire(
        'รหัสผ่านไม่ตรงกัน', '',
        'error')
      return;
    }
    else {
      if (this.dataset2.password_new2 == '') {
        this.data1 = {
          name: this.dataset2.name,
          addressUser: this.dataset2.addressUser,
          phoneNumber: this.dataset2.phoneNumber,
          username: this.dataset2.username,
          IDUser: this.dataset2.IDUser,
          password: this.dataset2.password
        };
      }
      else if (this.dataset2.password_new2 != '') {
        this.data1 = {
          name: this.dataset2.name,
          addressUser: this.dataset2.addressUser,
          phoneNumber: this.dataset2.phoneNumber,
          username: this.dataset2.username,
          IDUser: this.dataset2.IDUser,
          password: this.dataset2.password_new2

        };
      }
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
          this.demo = { mod: "updateDataUser", value: this.data1 };
          this.apiService.update(this.demo).subscribe((resposne: any) => {
            this.dataset2.password_new = '';
            this.dataset2.password_new2 = '';
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
}
