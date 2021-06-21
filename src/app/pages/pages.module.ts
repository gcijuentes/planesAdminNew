import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { PlanesComponent } from './admin/planes/planes.component';


@NgModule({
   declarations: [
     DashboardComponent,
     ProgressComponent,
     GraficaComponent,
     PagesComponent,
     UsuariosComponent,
     PlanesComponent,
   ],
   exports:[DashboardComponent,
     ProgressComponent,
     GraficaComponent,
     PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
