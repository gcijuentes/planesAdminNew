import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm= this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    correo:['',[Validators.required]],
    password:['',[Validators.required]],
    password2:['',[Validators.required]],
    terminos:[false,[Validators.required]]

  });

  constructor(private fb: FormBuilder,
              private usuarioService:UsuarioService) { }


  crearUsuario(){
    this.formSubmitted = true;
    //console.log(this.registerForm.value);
    if(this.registerForm.invalid){
      return;
    }

    this.usuarioService.crearUsuario(this.registerForm.value);

  }

  campoNoValido(campo:string):boolean{

    if(this.registerForm.get(campo).invalid && this.formSubmitted){
      return true;
    }
    return false;

  }

}
