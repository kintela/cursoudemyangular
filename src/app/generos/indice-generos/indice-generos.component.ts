import { GenerosService } from './../generos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.scss']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    const generos = this.generosService.obtenerTodos()
    .subscribe(generos=>{
      console.log(generos);
    },error=>console.error(error));
    
  }

}
