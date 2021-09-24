import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router) { }

  modelo: GeneroCreacionDTO = { nombre: 'Drama' };

  ngOnInit(): void {
  }

  guardarCambios(genero: GeneroCreacionDTO) {
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
