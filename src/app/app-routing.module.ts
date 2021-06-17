import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'',component:PagesComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'progress',component:ProgressComponent},
      {path:'grafica',component:GraficaComponent},
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]

  },


  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

  //{path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
