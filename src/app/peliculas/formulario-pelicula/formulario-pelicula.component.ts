import { MultipleSelectorModel } from './../../utilidades/selector-multiple/multipleSelectorModle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.scss']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  generosNoseleccionados: MultipleSelectorModel[] = [
    { clave: 1, valor: 'Drama' },
    { clave: 2, valor: 'Acción' },
    { clave: 3, valor: 'Comedia' }
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoseleccionados: MultipleSelectorModel[] = [
    { clave: 1, valor: 'Savoy' },
    { clave: 2, valor: 'Consa' },
    { clave: 3, valor: 'Decor' }
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          vakidators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }


  }
  changeMarkdown(texto) {
    this.form.get('resumen').setValue(texto);
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }
  guardarCambios() {
    const generosIds = this.generosSeleccionados.map(val => val.clave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.clave);
    this.form.get('cinesId').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);

  }

}
