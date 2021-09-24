import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.scss']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = { nombre: "Savoy", latitud: 43.32791497885743, longitud: -3.0318832397460938 };

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }

}
