import { Component, Input, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { environment } from 'src/environments/environment';
import { PlanCard } from 'src/app/interfaces/planes-card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() planesCard:PlanCard[]=[];

  @Input() public totalItems: number;
  @Input() public itemsPerPage: number;
  @Input() public currentPage: number;


  config: any;

  public default_image:string=environment.default_img;

  constructor(private planesService:PlanesService) {
  }

  ngOnInit(): void {
    console.log('CardComponent');
    console.log(this.planesCard);

  }

  pageChanged(event){
    console.log('getPage -> ');
    this.config.currentPage = event;
  }

  getPage(page) {
    console.log('getPage -> '+page);
    console.log(page);
    this.planesService.getPlanesCardByPage(page);

  }
}
