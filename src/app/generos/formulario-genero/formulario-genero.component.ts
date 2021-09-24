import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { GeneroCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.scss']
})
export class FormularioGeneroComponent implements OnInit {

  form: FormGroup;

  @Output()
  submit: EventEmitter<GeneroCreacionDTO> = new EventEmitter<GeneroCreacionDTO>();

  @Input()
  modelo: GeneroCreacionDTO;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  obtenerErrorCampoNombre(): string {
    var campo = this.form.get('nombre');
    if (campo.hasError('required')) {
      return 'El campo nombre es requerido'
    }
    if (campo.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres'
    }
    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return ''
  }

  guardarCambios() {
    this.submit.emit(this.form.value);
  }



}
