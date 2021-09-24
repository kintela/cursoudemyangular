import { Coordenada } from './../../utilidades/mapa/coordenada';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.scss']
})
export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  modelo: cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial: Coordenada[] = [];

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      latitud: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      longitud: [
        '',
        {
          validators: [Validators.required]
        }
      ]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({ latitud: this.modelo.latitud, longitud: this.modelo.longitud });
    }
  }

  coordenadaSeleccionada(coordenada: Coordenada) {
    this.form.patchValue(coordenada);
  }

  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }

}
