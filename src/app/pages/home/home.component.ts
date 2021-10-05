import { Component, OnInit, Output } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { PlanCard } from '../../interfaces/planes-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public planesCard:PlanCard[]=[];
  public totalItems: number;
  public itemsPerPage: number;
  public currentPage: number;


  constructor(private planesService:PlanesService) { }

  ngOnInit(): void {
      this.planesService.getPlanesCard();


      this.planesService.PlanesCardResponse$.subscribe(resp=>{
        console.log('home component');
        this.totalItems = resp.meta.total;
        this.itemsPerPage = resp.meta.per_page;
        this.currentPage = resp.meta.current_page;
        this.planesCard = resp.data;
        console.log(this.planesCard);
        console.log('home component complete');
      });


    }

}
