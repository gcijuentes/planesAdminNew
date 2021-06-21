import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {

  constructor() { }

  progreso: number = 10;

  ngOnInit(): void {
  }

  get getPorcentaje(){
    return  `${this.progreso}%`;
  }


  cambiarValor(valor:number){
    if(this.progreso>=100 && valor>=0){
      this.progreso=100;
    }
    if(this.progreso<=0 && valor<0){
      this.progreso=0;
      valor = 0;
    }

    this.progreso = this.progreso + valor;
    console.log(this.progreso);
  }

}
