import { Component, Input, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { PlanesService } from '../../services/planes.service';
import { PlanCard } from '../../interfaces/planes-card.interface';

interface State {
  page: number;
  pageOffset: number;
}

@Component({
  selector: 'app-basic-pagination',
  templateUrl: './basic-pagination.component.html',
  styleUrls: ['./basic-pagination.component.css']
})
export class BasicPaginationComponent implements OnInit {

  @Input() public length: number;
  @Input() public pageOffset: number;
  @Input() public pageIndex: number;
  public planesCard:PlanCard[]=[];



  constructor(private planesService:PlanesService ) { }

  ngOnInit(): void {
    console.log('Basic pagination component');

        console.log(this.length);

      console.log(this.pageIndex);

      console.log(this.pageOffset);





  }



  gty(pageIndex: any){

    //this.planesService.gty(pageIndex);

  }


/*
  ngAfterViewInit(): void {
    const newState = this.paginate.value;
    newState.page = this.pageIndex = 1;
    newState.pageOffset = this.pageOffset = 10;
    this.paginate.next(newState);
  }

  getFirstPage() {
    const newState = this.paginate.value;
    newState.page = this.pageIndex = 1;
    newState.pageOffset = this.pageOffset = 10;
    this.paginate.next(newState);
  }

  getNextPage() {
    const newState = this.paginate.value;
    newState.page = this.pageIndex = this.pageIndex + 1;
    newState.pageOffset = this.pageOffset = 10;
    this.paginate.next(newState);
  }

  getPreviousPage() {
    const newState = this.paginate.value;
    newState.page = this.pageIndex = this.pageIndex - 1;
    newState.pageOffset = this.pageOffset = 10;
    this.paginate.next(newState);
  }

  getLastPage() {
    const newState = this.paginate.value;
    this.pageIndex = (this.length % this.pageOffset == 0) ? (this.length / this.pageOffset) : ((this.length / this.pageOffset) + 1);
    this.pageIndex = Math.floor(this.pageIndex);
    newState.page = this.pageIndex;
    newState.pageOffset  = 10;
    this.paginate.next(newState);
  }*/

}
