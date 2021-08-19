import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { IsapresService } from '../../services/isapres.service';
import { Isapre } from 'src/app/interfaces/isapre.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  public isapres:Isapre[]=[];

  constructor(private planesService:PlanesService,private isapreService:IsapresService) { }

  ngOnInit(): void {
    this.isapreService.getPlanesCard();
    this.isapreService.isapres$.subscribe(resp=>{
      this.isapres=resp;
    });
  }

  filtrar(form ):void{
    this.planesService.getPlanesCardFilter(form);
  }

}
