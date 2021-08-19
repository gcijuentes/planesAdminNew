import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios();
   /* const promesa = new Promise((resolve,rejects)=>{

      if(false){
        resolve('Hola Mundo');
      }else{
        rejects('algo salio mal');
      }


    });

    promesa.then((mensaje)=>{
      console.log(mensaje);
      console.log('Hey Termine');
    })
    .catch(error=>console.log('Error en la app', error));

    console.log('Fin ngOninit');*/
  }

  getUsuarios(){

    fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body=>console.log(body.data));

  }

}
