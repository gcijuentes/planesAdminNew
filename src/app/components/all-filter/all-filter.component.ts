import { Component, OnInit } from '@angular/core';
import { IsapresService } from '../../services/isapres.service';
import { Isapre } from '../../interfaces/isapre.interface';
import { PlanesService } from '../../services/planes.service';
import { FormGroup ,FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-all-filter',
  templateUrl: './all-filter.component.html',
  styleUrls: ['./all-filter.component.css']
})
export class AllFilterComponent implements OnInit {

  public isapres:Isapre[]=[];

  formulario: FormGroup;
  items: FormArray;

  persons = [];

  newEdad:number=0;
  isCotizante:boolean=false;

  constructor(private planesService:PlanesService,private isapreService:IsapresService,
    private fb: FormBuilder) {
   }


   crearFormulario() {
    this.formulario = this.fb.group({
      precioMinino: new FormControl(),
      precioMaximo: new FormControl(),
      checkPreferente: new FormControl(),
      checkLibreEleccion: new FormControl(),
      checkCerrado: new FormControl(),
      //perfiles: this.fb.array(group),
      //checkBanmedica: new FormControl(),
      ////checkColmena: new FormControl(),
      ////checkConsalud: new FormControl(),
      //checkCruzBlanca: new FormControl(),
      //checkNuevaVida: new FormControl(),
      //checkVidatres: new FormControl(),
      //isapres: this.fb.array([])
      isapres: this.fb.array([])
  });
  }



  ngOnInit(): void {
    let group={};
    this.crearFormulario();
    this.isapreService.getPlanesCard();
    console.log('antes');
    console.log(this.formulario);
    this.isapreService.isapres$.subscribe(resp=>{
      this.isapres=resp;
      this.isapres.forEach(isapre=>{
          console.log('nombre:'+isapre.nombre);
          //this.addIsapre(isapre.nombre);
          let nameControl = isapre.nombre.replace(/\s/g, "");
          //this.formulario.addControl(('check' + (nameControl)), new FormGroup({}));

          this.items = this.formulario.get('isapres') as FormArray;
          this.items.push( new FormGroup({}));
      });
    });

    console.log('despues');
    console.log(this.formulario);

  }

  filtrar(form ):void{
    this.planesService.getPlanesCardFilter(form);
  }

  onSubmit(){
   console.log(this.formulario.value);
   // this.planesService.getPlanesCardFilter(formValues);
  }

  addItem() {
    console.log('new edad:');
    console.log(this.newEdad);
    console.log('isCotizante:');
    console.log(this.isCotizante);
    let cotizanteString = 'carga';

    if(this.newEdad > 120){
      return false;
    }

    let countCotizante = this.persons.reduce(function(n, person) {
      //console.log('n:'+n);
      //console.log('person:'+person);
      return n + (person.tipo === 'cotizante' );
      }, 0);


    console.log('countCotizante');
    console.log(countCotizante);

    if(!this.isCotizante){
      cotizanteString = 'cotizante'
      if(countCotizante>1){
        return false;
      }
    }

    let newPerfil = this.fb.group(
      {
        perfil: new FormControl('')
      }
    );

    //this.perfiles.push(newPerfil);
    this.filtrar(this.formulario);
    this.persons.push({edad:this.newEdad, tipo: cotizanteString});
  }

  deleteRow(index){
    console.log('index');
    console.log(index);
    this.persons.splice(index,1);
  }

  addIsapre(name:string): void {
    this.items = this.formulario.get('isapres') as FormArray;
    this.items.push(this.createFormGroup(name));
  }

  createFormGroup(name:string): FormGroup {
    return this.fb.group({
      name: ''
    });
  }

  isapresFormArray(): FormArray {
    return this.formulario.get('isapres') as FormArray;
  }

}
