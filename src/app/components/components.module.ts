import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalpdfComponent } from './modalpdf/modalpdf.component';
import { PipesModule } from '../pipes/pipes.module';
import { BasicPaginationComponent } from './basic-pagination/basic-pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';
import { AllFilterComponent } from './all-filter/all-filter.component';



@NgModule({
  declarations: [CardComponent,
    FilterComponent,
    NavbarComponent,
    ModalpdfComponent,
    BasicPaginationComponent,
    AllFilterComponent,
  ],
  exports:[CardComponent,
    FilterComponent,
    NavbarComponent,
    ModalpdfComponent,
    BasicPaginationComponent,
    AllFilterComponent,
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,PipesModule,NgxPaginationModule,JwPaginationModule,ReactiveFormsModule
  ]
})
export class ComponentsModule { }
