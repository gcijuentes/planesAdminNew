import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';
import { PlanCard, PlanesCardResponse } from '../../../interfaces/planes-card.interface';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styles: [
  ]
})
export class PlanesComponent implements OnInit {


  public planesCard:PlanCard[]=[];
  //public planesCardResponse:PlanesCardResponse;

  constructor(private planesService:PlanesService) { }

  ngOnInit(): void {
    this.planesService.getPlanesCard();
    this.planesService.planesCard$.subscribe(resp=>{
      console.log(resp);
      this.planesCard = resp;
  });

  }

}
