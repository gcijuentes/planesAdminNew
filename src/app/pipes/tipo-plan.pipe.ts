import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoPlan'
})
export class TipoPlanPipe implements PipeTransform {
  tipoPlan:string='';

  transform(value: number, ...args: unknown[]): string {

    if(value==1){
      this.tipoPlan = 'Cerrado'
    }else if(value==2){
      this.tipoPlan = 'Libre Elección'
    }else if(value==3){
      this.tipoPlan = 'Preferente'
    }

    return this.tipoPlan;
  }

}
