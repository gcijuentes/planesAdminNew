import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { PlanesComponent } from './admin/planes/planes.component';
import { PromesasComponent } from './promesas/promesas.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica', component: GraficaComponent },


      { path: 'promesas', component: PromesasComponent },

      //mantenimientos
      { path: 'usuarios', component: UsuariosComponent, data:{titulo:'Mantenedor de usuario'} },
      { path: 'planes', component: PlanesComponent, data:{titulo:'Mantenedor de planes'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
