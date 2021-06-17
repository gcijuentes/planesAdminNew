import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { Header2Component } from './shared/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GraficaComponent,
    NopagefoundComponent,
    ProgressComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    HeaderComponent,
    SidebarComponent,
    NuevoComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
