import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  @Input()
  peliculas;

  constructor() { }

  eliminar(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);

  }

  ngOnInit(): void {

  }

}
