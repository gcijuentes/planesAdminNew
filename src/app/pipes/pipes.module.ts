import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { TipoPlanPipe } from './tipo-plan.pipe';


@NgModule({
  declarations:[SafePipe, TipoPlanPipe], // <---
  imports:[CommonModule],
  exports:[SafePipe,TipoPlanPipe] // <---
})

export class PipesModule { }
