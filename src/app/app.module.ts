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
//ค้นหา
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//map
import {AgmCoreModule} from '@agm/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ManageRubberFarmerComponent } from './components/manage-rubber-farmer/manage-rubber-farmer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StatisticsNowComponent } from './components/statistics-now/statistics-now.component'

import { CooperativePageComponent } from './components/page-cooperative/cooperative-page.component';
import { AppheaderAdminComponent } from './components/appheader-admin/appheader-admin.component';
import { AppheaderGuestUserComponent } from './components/appheader-guest-user/appheader-guest-user.component';
import { AppmenuGuestUserComponent } from './components/appmenu-guest-user/appmenu-guest-user.component';
import { AppmenuCooperativeComponent } from './components/appmenu-cooperative/appmenu-cooperative.component';
import { AppmenuAdminComponent } from './components/appmenu-admin/appmenu-admin.component';
import { AppheaderCooperativeComponent } from './components/appheader-cooperative/appheader-cooperative.component';
import { ManageUserFarmerComponent } from './components/manage-user-farmer/manage-user-farmer.component';
import { ManageTreeFarmerComponent } from './components/manage-tree-farmer/manage-tree-farmer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageRubberAddFarmerComponent } from './components/manage-rubber-add-farmer/manage-rubber-add-farmer.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// import {NgxPaginationModule} from 'ngx-pagination';
import { PageCooperativeUserComponent } from './components/page-cooperative-user/page-cooperative-user.component';
import { PageGuestComponent } from './components/page-guest/page-guest.component';
import { PageGuestUserComponent } from './components/page-guest-user/page-guest-user.component';
import { PageCooperativeManageComponent } from './components/page-cooperative-manage/page-cooperative-manage.component';
import { StatisticsCooperativeComponent } from './components/statistics-cooperative/statistics-cooperative.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { DataTablesModule } from 'angular-datatables';
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

    AppheaderAdminComponent,
    
    AppheaderGuestUserComponent,
    AppmenuGuestUserComponent,
    AppmenuCooperativeComponent,
    AppmenuAdminComponent,
    AppheaderCooperativeComponent,
    ManageUserFarmerComponent,
    ManageTreeFarmerComponent,
    ManageRubberAddFarmerComponent,
    PageCooperativeUserComponent,
    PageGuestComponent,
    PageGuestUserComponent,
    PageCooperativeManageComponent,
    StatisticsCooperativeComponent,
    
  ],
  imports: [NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    ChartsModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey:'AIzaSyCX423Bi4KNkkZlMKX6vY1DNGg0q6PHnAA'
      apiKey:'AIzaSyBnnXUSmpaCRNkdJknFN4wU1XcDbbg1MsI'
    }),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    DataTablesModule,
    // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCX423Bi4KNkkZlMKX6vY1DNGg0q6PHnAA&callback=initMap" async defer></script>
  
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
