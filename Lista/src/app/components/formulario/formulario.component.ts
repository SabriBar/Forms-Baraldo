import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor() {
    let regexCorreo: string = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';
    let controles: any = {
      correo: new FormControl('',[Validators.required, Validators.pattern(regexCorreo)]),
      contra: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      recuerdame: new FormControl(false, [])
    };

    this.formularioLogin = new FormGroup(controles);
   }

   login(){
    console.log(this,this.formularioLogin);
   }

  ngOnInit(): void {
  }

}
