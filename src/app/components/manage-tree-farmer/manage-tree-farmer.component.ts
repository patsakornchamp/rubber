import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../../api.sercice'
import { AuthenticationService } from '../../_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-tree-farmer',
  templateUrl: './manage-tree-farmer.component.html',
  styleUrls: ['./manage-tree-farmer.component.css']
})
export class ManageTreeFarmerComponent implements OnInit {
  modalRef: BsModalRef;
  searhText: any;
  constructor(private modalService: BsModalService,
    private service: ApiService,
    private apiService: ApiService,
    private authenticationService: AuthenticationService) { }
  //ตัวแปล
  p:number = 1;
  demo: any;
  GET_Plantation: any;
  GET_RubberTree: any;
  serialNumber: any;
  EDIT_RubberTree: any;
  IDUser: any;
  dataUser: any;
  test: any;
  namePlantation: any = '';
  equipment: any;
  equipment_Item: any;
  species :any ;
  dataSet: any = {
    serialNumber:null,row:null,col:null,species:null,datePlant:null,IDPlantation:null
  };
  data_edit: any = {
    serialNumber: null, row: null, col: null, species: null, datePlant: Date, IDRubber: null
  }


  ngOnInit() {
    this.dataUser = this.authenticationService.currentUserValue;
    this.IDUser = this.dataUser[0]['IDUser'];
    this.get_Plantation();
    this.get_equipment();
    this.get_species();
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
  get_Plantation() {
    this.demo = {
      mod: "getPlantation",
      value: {
        "IDUserF": this.IDUser
      }
    };

    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_Plantation = resposne;
    });
  }
  get_species() {
    this.demo = {
      mod: "get_species"
    };

    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.species = resposne;
      // console.log(this.species);
    });
  }
  getRubberTree(data) {
    this.test = data;
    this.namePlantation = data.namePlantation;
    this.dataSet.IDPlantation = data.IDPlantation
    this.demo = {
      mod: "getRubberTree",
      value: {
        "IDUserF": this.IDUser,
        "IDPlantation": this.dataSet.IDPlantation
      }
    };
    this.apiService.read(this.demo).subscribe((resposne: any) => {
      this.GET_RubberTree = resposne;
      this.modalRef.hide();
    });
  }
  get_serial() {
    if (this.equipment_Item == undefined) {
      Swal.fire(
        'กรุณาเลือกอุปกรณ์', '',
        'error')
    }
    else {
    this.demo = {
      mod: "get_serial",
      value: {
        "equipment_Item": this.equipment_Item
      }
    };

      this.apiService.read(this.demo).subscribe((resposne: any) => {
        this.dataSet.serialNumber = resposne[0].serialNumber;
        // console.log(this.GET_serial);
      });
    }

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
      // console.log(resposne);
    });
  }
  inserte_rubber() {
    // console.log(this.namePlantation);
    // return;
    // let data = {
    //   userID: this.IDUser,
    //   equipment_Item: this.equipment_Item
    // };
    if (this.namePlantation != '') {
      Swal.fire({
        title: 'ยืนยันการบันทึก',
        text: "ของแปลง  "+this.namePlantation,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.demo = { mod: "inserte_rubber", value: this.dataSet };
          this.apiService.insert(this.demo).subscribe((resposne: any) => {
            this.getRubberTree(this.test);
            Swal.fire(
              'บันทึกเรียบร้อย', "",
              'success')
          });
          this.dataSet.row = null;
          this.dataSet.col = null;
          this.dataSet.species = null;
          this.dataSet.serialNumber = null;
        }
      })
    }
    else {
      Swal.fire(
        'กรุณาเลือกสวนยาง', '',
        'error')
    }
  }
  deleteDataRubber(data) {
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
        let IDRubber = data
        this.demo = {
          mod: "deleteDataRubber",
          value: {
            "IDRubber": IDRubber
          }
        };
        this.apiService.delete(this.demo).subscribe((resposne: any) => {
          this.getRubberTree(this.test);
          Swal.fire(
            'ลบเรียบร้อยแล้ว',
            '',
            'success'
          )
          this.get_Plantation();
        })
      }
    })
  }
  Click_Edit(data) {
    this.data_edit.serialNumber = data.serialNumber;
    this.data_edit.row = data.row;
    this.data_edit.col = data.col;
    this.data_edit.species = data.species;
    this.data_edit.datePlant = data.datePlant;
    this.data_edit.IDRubber = data.IDRubber;
  }
  updateDataRubber() {
    // console.log(this.data_edit.datePlant);
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
        console.log(this.data_edit.datePlant);
        this.demo = { mod: "updateDataRubber", value: this.data_edit };
        this.apiService.update(this.demo).subscribe((resposne: any) => {
          this.getRubberTree(this.test);
          Swal.fire(
            'แก้ไขเรียบร้อย', "",
            'success')
        });
        this.modalRef.hide();
      }
    })
  }
  sendID() {
    this.dataSet.ID
    this.service.readOl().subscribe((resposne: any) => {
      console.log(resposne);
      // if(resposne){
      // }
    });
  }
}
