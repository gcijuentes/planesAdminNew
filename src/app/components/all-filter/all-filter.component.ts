import { Component, OnInit } from '@angular/core';
import { IsapresService } from '../../services/isapres.service';
import { Isapre } from '../../interfaces/isapre.interface';
import { PlanesService } from '../../services/planes.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-all-filter',
  templateUrl: './all-filter.component.html',
  styleUrls: ['./all-filter.component.css'],
})
export class AllFilterComponent implements OnInit {
  public isapres: Isapre[] = [];

  formulario: FormGroup;
  items: FormArray;
  perfiles: FormArray;

  persons = [];

  newEdad: number = 0;
  isCarga: boolean = false;

  constructor(
    private planesService: PlanesService,
    private isapreService: IsapresService,
    private fb: FormBuilder
  ) {}

  crearFormulario() {
    this.formulario = this.fb.group({
      precioMinimo: new FormControl(),
      precioMaximo: new FormControl(),
      checkPreferente: new FormControl(),
      checkLibreEleccion: new FormControl(),
      checkCerrado: new FormControl(),
      newEdad: new FormControl(),
      isCarga: new FormControl(),
      perfiles: this.fb.array([]),
      //checkBanmedica: new FormControl(),
      ////checkColmena: new FormControl(),
      ////checkConsalud: new FormControl(),
      //checkCruzBlanca: new FormControl(),
      //checkNuevaVida: new FormControl(),
      //checkVidatres: new FormControl(),
      //isapres: this.fb.array([]),
      isapres: this.fb.array([]),
      //isapres: new FormArray([])
      //prueba: this.formulario2
    });
  }

  ngOnInit(): void {
    console.log('ng Oninit');
    let group = {};
    this.crearFormulario();
    this.isapreService.getPlanesCard();

    console.log(this.formulario);
    this.isapreService.isapres$.subscribe((resp) => {
      this.isapres = resp;
      //this.addCheckboxesToForm();
      this.isapres.forEach((isapre) => {
        // console.log('nombre:'+isapre.nombre);
        this.addIsapre(isapre.id,isapre.nombre);
      });
    });

    //console.log('despues');
    console.log(this.formulario);
  }

  filtrar(): void {
    //console.log("filtrar");
    this.planesService.getPlanesCardFilter(this.formulario);
  }

  onSubmit() {
    //console.log("on submit");
    this.planesService.getPlanesCardFilter(this.formulario);
  }

  get ordersFormArray() {
    return this.formulario.controls.isapres as FormArray;
  }

  addItem() {
   //console.log('new edad:');
    //console.log(this.formulario.value.newEdad);
    console.log('isCotizante:');
    console.log(this.formulario.value.isCarga);
    let cotizanteString = 'carga';


    let newEdad = this.formulario.value.newEdad;
    let isCarga =  (this.formulario.value.isCarga==null)? false: this.formulario.value.isCarga;
    //console.log('isCarga:'+isCarga)
    if (newEdad > 120 || newEdad == null) {
      return false;
    }

    let countCotizante = this.persons.reduce(function (n, person) {
      return n + (person.tipo === 'cotizante');
    }, 0);

    if (!isCarga) {
      cotizanteString = 'cotizante';
      if (countCotizante > 1) {
        return false;
      }
    }
    ///this.formulario.value.newEdad =33;
    this.formulario.controls['newEdad'].setValue('');
    this.addPerfil(1,newEdad,isCarga);
    this.filtrar();

    this.persons.push({ edad: newEdad, tipo: cotizanteString });
  }

  deleteRow(index) {
    this.perfiles = this.formulario.get('perfiles') as FormArray;
    this.perfiles.removeAt(index);
    this.persons.splice(index, 1);
  }

  addIsapre(id:number , name: string): void {
    this.items = this.formulario.get('isapres') as FormArray;
    this.items.push(this.createFormGroup(id,name));
  }

  createFormGroup(id:number, name: string): FormGroup {
    return this.fb.group({
      name: name,
      id: id,
      selected: false,
    });
  }

  addPerfil(id:number,edad: string,isCarga:boolean): void {
    this.perfiles = this.formulario.get('perfiles') as FormArray;
    this.perfiles.push(this.createPerfilFormGroup(id,edad,isCarga));
  }

  createPerfilFormGroup(id:number,edad: string,isCarga:boolean): FormGroup {
    return this.fb.group({
      id: id,
      edad: edad,
      isCarga: isCarga
    });
  }

  get isapresFormArray(): FormArray {
    return this.formulario.controls.isapres as FormArray;
  }

}
