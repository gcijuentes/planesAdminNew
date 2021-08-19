import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { environment } from 'src/environments/environment';
import { PlanCard } from 'src/app/interfaces/planes-card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public planesCard:PlanCard[]=[];
  public default_image:string=environment.default_img;

  constructor(private planesService:PlanesService) { }

  ngOnInit(): void {
    this.planesService.getPlanesCard();
    this.planesService.planesCard$.subscribe(resp=>{
      console.log(resp);
      this.planesCard = resp;
    });
  }
}
