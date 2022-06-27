import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAppointmentComponent } from './get-appointment/get-appointment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component:  HomeComponent},
  {path: 'login', component:  LoginComponent},
  {path: 'get-appointment', component:  GetAppointmentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
