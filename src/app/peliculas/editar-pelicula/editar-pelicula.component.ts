import { PeliculaCreacionDTO } from './../pelicula';
import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = { titulo: 'Spider-Man', trailer: 'trailer', enCines: true, resumen: 'Culaquier cosa', fechaLanzamiento: new Date(), poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg' }

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }

}
