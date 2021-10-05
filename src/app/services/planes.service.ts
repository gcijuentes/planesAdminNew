import { EventEmitter,Injectable } from '@angular/core';
import { PlanCard, PlanesCardResponse } from '../interfaces/planes-card.interface';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  public planesCard:PlanCard[]=[];

  public length$ = new EventEmitter<any>();
  public pageOffset$ = new EventEmitter<any>();
  public pageIndex$ = new EventEmitter<any>();


  public planesCard$ = new EventEmitter<PlanCard[]>();
  public PlanesCardResponse$ = new EventEmitter<PlanesCardResponse>();

  constructor(private http: HttpClient) {

  }

  getPlanesCard():PlanCard[]{
    console.log('[PlanesService] getPlanesCard - start');
     this.http.get<PlanesCardResponse>(`${environment.api_url}/planes`).subscribe(resp=>{
      this.planesCard$.emit(resp.data);
      this.PlanesCardResponse$.emit(resp);
      this.length$.emit(resp.meta.total);
      this.pageOffset$.emit(resp.meta.per_page);
      this.pageIndex$.emit(resp.meta.current_page);
    });
    console.log('[PlanesService] getPlanesCard - end');
    return this.planesCard;
  }


  getPlanesCardByPage(page: any){
    console.log('[PlanesService] getPlanesCardByPage - start');
    this.http.get<PlanesCardResponse>(`${environment.api_url}/planes?page=${page}`).subscribe(resp=>{
      this.planesCard$.emit(resp.data);
      this.PlanesCardResponse$.emit(resp);
    });
    console.log('[PlanesService] getPlanesCardByPage - end');
  }

  getPlanesCardFilter(form:NgForm){
    console.log('[PlanesService] getPlanesCardFilter - start');

    console.log('form:');
    console.log(form);
    if(form.value.precioMinimo == null && form.value.precioMaximo == null ){
        this.getPlanesCard();
    }else{
      let params = new HttpParams();
      if (form.value.precioMinimo != null){
        params = params.append('precioDesde', form.value.precioMinimo);
      }
      if (form.value.precioMaximo != null){
        params = params.append('precioHasta', form.value.precioMaximo);
      }
      this.http.get<PlanesCardResponse>(`${environment.api_url}/planes`, {params: params}).subscribe(resp=>{
        console.log(resp);
        this.planesCard$.emit(resp.data);
        this.PlanesCardResponse$.emit(resp);
      });
    }
    console.log('[PlanesService] getPlanesCardFilter - end');
  }
}
