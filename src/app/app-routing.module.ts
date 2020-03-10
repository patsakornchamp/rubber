import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatisticsNowComponent } from './components/statistics-now/statistics-now.component';
import { AuthGuard } from './auth.guard';
import { AppheaderFarmerComponent } from './components/appheader-farmer/appheader-farmer.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuFarmerComponent } from './components/appmenu-farmer/appmenu-farmer.component';
import { AppheaderAdminComponent } from './components/appheader-admin/appheader-admin.component';
import { AppheaderGuestUserComponent } from './components/appheader-guest-user/appheader-guest-user.component';
import { AppmenuAdminComponent } from './components/appmenu-admin/appmenu-admin.component';
import { AppmenuCooperativeComponent } from './components/appmenu-cooperative/appmenu-cooperative.component';
import { AppmenuGuestUserComponent } from './components/appmenu-guest-user/appmenu-guest-user.component';
import { CooperativePageComponent } from './components/page-cooperative/cooperative-page.component';
import { PageGuestComponent } from './components/page-guest/page-guest.component';
import { PageCooperativeManageComponent } from './components/page-cooperative-manage/page-cooperative-manage.component';
import { PageGuestUserComponent } from './components/page-guest-user/page-guest-user.component';
import { AppheaderCooperativeComponent } from './components/appheader-cooperative/appheader-cooperative.component';
import { ManageRubberFarmerComponent } from './components/manage-rubber-farmer/manage-rubber-farmer.component';
import { ManageRubberAddFarmerComponent} from './components/manage-rubber-add-farmer/manage-rubber-add-farmer.component'; 
import { ManageUserFarmerComponent } from './components/manage-user-farmer/manage-user-farmer.component';
import { ManageTreeFarmerComponent } from './components/manage-tree-farmer/manage-tree-farmer.component';
import { PageCooperativeUserComponent } from './components/page-cooperative-user/page-cooperative-user.component';
import { StatisticsCooperativeComponent } from './components/statistics-cooperative/statistics-cooperative.component';

import { from } from 'rxjs';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'farmer', component: FarmerComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'statistics-now', component: StatisticsNowComponent, canActivate: [AuthGuard] },
  { path: 'manage-rubber-farmer', component: ManageRubberFarmerComponent, canActivate: [AuthGuard] },
  { path: 'manage-rubber-add-farmer', component: ManageRubberAddFarmerComponent, canActivate: [AuthGuard] },
  { path: 'manage-user-farmer', component: ManageUserFarmerComponent, canActivate: [AuthGuard] },
  { path: 'manage-tree-farmer', component: ManageTreeFarmerComponent, canActivate: [AuthGuard] },

  { path: 'appheader-farmer', component: AppheaderFarmerComponent, canActivate: [AuthGuard] },
  { path: 'appmenu', component: AppmenuComponent, canActivate: [AuthGuard] },
  { path: 'appheader', component: AppheaderComponent, canActivate: [AuthGuard] },
  { path: 'appmenu-farmer', component: AppmenuFarmerComponent, canActivate: [AuthGuard] },
  
  { path: 'appheader-admin', component: AppheaderAdminComponent, canActivate: [AuthGuard] },
  { path: 'appheader-cooperative', component: AppheaderCooperativeComponent, canActivate: [AuthGuard] },
  { path: 'appheader-guset-user', component: AppheaderGuestUserComponent, canActivate: [AuthGuard] },
  
  { path: 'appmenu-admin', component: AppmenuAdminComponent, canActivate: [AuthGuard] },
  { path: 'appmenu-cooperative', component: AppmenuCooperativeComponent, canActivate: [AuthGuard] },
  { path: 'appmenu-guset-user', component: AppmenuGuestUserComponent, canActivate: [AuthGuard] },
  
  { path: 'page-cooperative', component: CooperativePageComponent, canActivate: [AuthGuard] },
  { path: 'page-guest-user', component: PageGuestUserComponent, canActivate: [AuthGuard] },
  { path: 'page-guset', component: PageGuestComponent, canActivate: [AuthGuard] },
  { path: 'page-cooperative-manage', component: PageCooperativeManageComponent, canActivate: [AuthGuard] },
  { path: 'page-cooperative-user', component: PageCooperativeUserComponent, canActivate: [AuthGuard] },
  { path: 'statistics-cooperative', component: StatisticsCooperativeComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ModalModule.forRoot(),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }