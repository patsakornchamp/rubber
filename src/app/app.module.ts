import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//Routerเรียกใช้หน้าเพจ
import { Routes,RouterModule } from '@angular/router';
//ng-model
import { FormsModule } from '@angular/forms';
import { FarmerComponent } from './components/farmer/farmer.component';
import { AppmenuFarmerComponent } from './components/appmenu-farmer/appmenu-farmer.component';
import { AppheaderFarmerComponent } from './components/appheader-farmer/appheader-farmer.component';
//ngx
import { ModalModule } from 'ngx-bootstrap/modal';
//map
import {AgmCoreModule} from '@agm/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ManageRubberFarmerComponent } from './components/manage-rubber-farmer/manage-rubber-farmer.component';
import { TabsModule } from 'ngx-bootstrap/tabs'

//ส่วนเรียกใช้หน้าเพจ
const routes: Routes = [
  {path: '' ,redirectTo:'/login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'farmer',component:FarmerComponent},
  {path:'register',component:RegisterComponent},
  {path:'statistics',component:StatisticsComponent},
  {path:'manage-rubber-farmer',component:ManageRubberFarmerComponent},

  {path:'**',redirectTo: '/login'}
];
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC9XocvE-nxGymaM7eTzkwZ02KwlBLHXTY'
    }),
    TabsModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
