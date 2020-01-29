import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//Routerเรียกใช้หน้าเพจ
import { Routes,RouterModule } from '@angular/router';
//ng-model
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerComponent } from './components/farmer/farmer.component';
import { AppmenuFarmerComponent } from './components/appmenu-farmer/appmenu-farmer.component';
import { AppheaderFarmerComponent } from './components/appheader-farmer/appheader-farmer.component';
//ngx
import { ModalModule } from 'ngx-bootstrap/modal';
//map
import {AgmCoreModule} from '@agm/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ManageRubberFarmerComponent } from './components/manage-rubber-farmer/manage-rubber-farmer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StatisticsNowComponent } from './components/statistics-now/statistics-now.component'

import { AccountService } from './components/services/account_services';
import { CooperativePageComponent } from './components/page-cooperative/cooperative-page.component';
import { GuestUserPageComponent } from './components/page-guest-user/guest-user-page.component';
import { AdminPageComponent } from './components/page-admin/admin-page.component';
import { AppheaderAdminComponent } from './components/appheader-admin/appheader-admin.component';
import { AppheaderGuestUserComponent } from './components/appheader-guest-user/appheader-guest-user.component';
import { AppmenuGuestUserComponent } from './components/appmenu-guest-user/appmenu-guest-user.component';
import { AppmenuCooperativeComponent } from './components/appmenu-cooperative/appmenu-cooperative.component';
import { AppmenuAdminComponent } from './components/appmenu-admin/appmenu-admin.component';
import { AppheaderCooperativeComponent } from './components/appheader-cooperative/appheader-cooperative.component';

// ส่วนเรียกใช้หน้าเพจ
// const routes: Routes = [
//   {path: '' ,redirectTo:'/login', pathMatch: 'full'},
//   {path:'login',component:LoginComponent},
//   {path:'farmer',component:FarmerComponent},
//   {path:'register',component:RegisterComponent},
//   {path:'statistics',component:StatisticsComponent},
//   {path:'statistics-now',component:StatisticsNowComponent},
//   {path:'manage-rubber-farmer',component:ManageRubberFarmerComponent},
//   {path:'**',redirectTo: '/login'}
// ];
@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppsettingComponent,
    AppmenuComponent,
    AppheaderComponent,
    LoginComponent,
    RegisterComponent,
    FarmerComponent,
    AppmenuFarmerComponent,
    AppheaderFarmerComponent,
    StatisticsComponent,
    ManageRubberFarmerComponent,
    StatisticsNowComponent,
    CooperativePageComponent,
    GuestUserPageComponent,
    AdminPageComponent,
    AppheaderAdminComponent,
    
    AppheaderGuestUserComponent,
    AppmenuGuestUserComponent,
    AppmenuCooperativeComponent,
    AppmenuAdminComponent,
    AppheaderCooperativeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC9XocvE-nxGymaM7eTzkwZ02KwlBLHXTY'
    }),
    TabsModule.forRoot()

  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
