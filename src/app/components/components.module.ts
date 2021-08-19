import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalpdfComponent } from './modalpdf/modalpdf.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [CardComponent,FilterComponent,NavbarComponent, ModalpdfComponent],
  exports:[CardComponent,FilterComponent,NavbarComponent,ModalpdfComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,PipesModule
  ]
})
export class ComponentsModule { }
