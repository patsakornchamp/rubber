import { Component, OnInit ,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-appheader-admin',
  templateUrl: './appheader-admin.component.html',
  styleUrls: ['./appheader-admin.component.css']
})
export class AppheaderAdminComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private authService: AuthService,private router: Router,private modalService: BsModalService) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
