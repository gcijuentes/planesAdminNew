import { EventEmitter,Injectable } from '@angular/core';
import { PlanCard, PlanesCardResponse } from '../interfaces/planes-card.interface';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { NgForm, FormGroup } from '@angular/forms';

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
    //console.log('[PlanesService] getPlanesCard - start');
     this.http.get<PlanesCardResponse>(`${environment.api_url}/planes`).subscribe(resp=>{
      this.planesCard$.emit(resp.data);
      this.PlanesCardResponse$.emit(resp);
      this.length$.emit(resp.meta.total);
      this.pageOffset$.emit(resp.meta.per_page);
      this.pageIndex$.emit(resp.meta.current_page);
    });
    //console.log('[PlanesService] getPlanesCard - end');
    return this.planesCard;
  }


  getPlanesCardByPage(page: any){
   // console.log('[PlanesService] getPlanesCardByPage - start');
    this.http.get<PlanesCardResponse>(`${environment.api_url}/planes?page=${page}`).subscribe(resp=>{
      this.planesCard$.emit(resp.data);
      this.PlanesCardResponse$.emit(resp);
    });
   // console.log('[PlanesService] getPlanesCardByPage - end');
  }

  getPlanesCardFilter(formulario:FormGroup){
    //console.log('[PlanesService] getPlanesCardFilter - start');
    let params = new HttpParams();
    //console.log('form:');
    //console.log(formulario.value);
    let precioMinimo = formulario.value.precioMinimo;
    let precioMaximo = formulario.value.precioMaximo;
    console.log(precioMaximo);

    let i = 0;
    var edades: Array<string>= [];
    var isCargas: Array<string>= [];
    formulario.value.perfiles.forEach(perfil => {
      edades.push(perfil.edad);
      isCargas.push(perfil.isCarga);
      i++;
    });

    params = params.append('edades', edades.join(','));
    params = params.append('isCargas', isCargas.join(','));
    params = params.append('totalPerfiles', ''+i);


    if(precioMinimo == null && precioMaximo == null ){
        //this.getPlanesCard();
    }else{
      if (precioMinimo != null){
        params = params.append('precioDesde', precioMinimo);
      }
      if (precioMaximo != null){
        params = params.append('precioHasta', precioMaximo);
      }

    }
    //isapres
    let isapreArray:Array<string> = [];
    formulario.value.isapres.forEach(isapre => {
      if(isapre.selected){
        isapreArray.push(isapre.id)
      }
    });

    params = params.append('isapres', isapreArray.join(','));

    // tipo de plan
    let tipoPlan: Array<string> = [];
    if( formulario.value.checkCerrado !=null && formulario.value.checkCerrado == true){
      //console.log('checkCerrado');
      tipoPlan.push('1'); // cerrado
    }

    if( formulario.value.checkLibreEleccion !=null && formulario.value.checkLibreEleccion == true){
      //console.log('checkLibreEleccion');
      tipoPlan.push('2'); // libre eleccion
    }

    if( formulario.value.checkPreferente !=null && formulario.value.checkPreferente == true){
      //console.log('checkPreferente');
      tipoPlan.push('3'); // preferente
    }
    params = params.append('tipoPlan', tipoPlan.join(','));

    //console.log('Before send request:');
    //console.log(params);

    this.http.get<PlanesCardResponse>(`${environment.api_url}/planes`, {params: params}).subscribe(resp=>{
     //console.log(resp);
      this.planesCard$.emit(resp.data);
      this.PlanesCardResponse$.emit(resp);
    });

   // console.log('[PlanesService] getPlanesCardFilter - end');
  }
}
