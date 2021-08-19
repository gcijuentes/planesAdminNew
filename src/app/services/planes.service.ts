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

  public planesCard$ = new EventEmitter<PlanCard[]>();
  public PlanesCardResponse$ = new EventEmitter<PlanesCardResponse>();

  constructor(private http: HttpClient) {

  }

  getPlanesCard():PlanCard[]{
     this.http.get<PlanesCardResponse>(`${environment.api_url}/planes`).subscribe(resp=>{
      this.planesCard$.emit(resp.data);
      this.PlanesCardResponse$.emit(resp);
    });
    return this.planesCard;
  }

  getPlanesCardFilter(form:NgForm){
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
  }
}
