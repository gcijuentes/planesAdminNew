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
import { EditarComponent } from './admin/planes/editar/editar.component';
import { PromesasComponent } from './promesas/promesas.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
   declarations: [
     DashboardComponent,
     ProgressComponent,
     GraficaComponent,
     PagesComponent,
     UsuariosComponent,
     PlanesComponent,
     EditarComponent,
     PromesasComponent,
     HomeComponent,
     DetalleComponent
   ],
   exports:[DashboardComponent,
     ProgressComponent,
     GraficaComponent,
     PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
