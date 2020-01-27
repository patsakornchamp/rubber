import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ManageRubberFarmerComponent } from './components/manage-rubber-farmer/manage-rubber-farmer.component';
import { StatisticsNowComponent } from './components/statistics-now/statistics-now.component';
import { AuthGuard } from './auth.guard';
import { AppheaderFarmerComponent } from './components/appheader-farmer/appheader-farmer.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuFarmerComponent } from './components/appmenu-farmer/appmenu-farmer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'farmer', component: FarmerComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'statistics-now', component: StatisticsNowComponent, canActivate: [AuthGuard] },
  { path: 'manage-rubber-farmer', component: ManageRubberFarmerComponent, canActivate: [AuthGuard] },
  { path: 'appheader-farmer', component: AppheaderFarmerComponent, canActivate: [AuthGuard] },
  { path: 'appmenu', component: AppmenuComponent, canActivate: [AuthGuard] },
  { path: 'appheader', component: AppheaderComponent, canActivate: [AuthGuard] },
  { path: 'appmenu-farmer', component: AppmenuFarmerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }