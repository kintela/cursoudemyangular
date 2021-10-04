import { GenerosService } from './../generos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroCreacionDTO } from '../genero';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.scss']
})
export class CrearGeneroComponent {
  errores:string[]=[];

  constructor(private router: Router, private generosService:GenerosService) { }

  guardarCambios(genero: GeneroCreacionDTO) {
    this.generosService.crear(genero).subscribe(()=>{
      this.router.navigate(['/generos']);
    }, error=>this.errores=parsearErroresAPI(error));    
  }

}
