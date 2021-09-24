import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;

  maximoRatingArr = [];

  votado: boolean = false;
  ratingAnterior;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  rate(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

  onMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  onMouseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }

  }



  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

}
