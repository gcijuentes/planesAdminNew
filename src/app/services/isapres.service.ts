import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IsapreResponse } from '../interfaces/isapre.interface';
import { Isapre } from '../interfaces/isapre.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsapresService {

  public isapres:Isapre[]=[];
  public isapres$ = new EventEmitter<Isapre[]>();

  constructor(private http: HttpClient) {

  }

  getPlanesCard():Isapre[]{
    this.http.get<IsapreResponse>(`${environment.api_url}/isapres`).subscribe(resp=>{
     this.isapres$.emit(resp.data);
   });
   return this.isapres;
 }

}
