import { Component, OnInit ,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-appheader-farmer',
  templateUrl: './appheader-farmer.component.html',
  styleUrls: ['./appheader-farmer.component.css']
})
export class AppheaderFarmerComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(
    private authService: AuthService,private router: Router,private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
