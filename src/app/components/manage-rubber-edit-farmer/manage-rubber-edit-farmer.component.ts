import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.sercice';
import { AuthenticationService } from '../../_services';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-manage-rubber-edit-farmer',
  templateUrl: './manage-rubber-edit-farmer.component.html',
  styleUrls: ['./manage-rubber-edit-farmer.component.css']
})
export class ManageRubberEditFarmerComponent implements OnInit {

  constructor(private modalService: BsModalService,private router: Router, private apiService: ApiService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
