import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';



const routes: Routes = [
  //path: '/dashboard' PagesRoutingModule
  //path: '/auth' AuthRoutingModule
  { path: '', component: HomeComponent},
  { path: 'detalle', component: DetalleComponent},
  //{ path: '/dashboard', redirectTo:'/dashboard',pathMatch:'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
