import { actorCreacionDTO, actorDTO } from './../actor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = { nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nick-nolte-ficha-fotogramas-1612818773.jpg' };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        //alert(params.id);
      }
    );
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }


}
