import { RatingComponent } from './../utilidades/rating/rating.component';
import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  @Input()
  titulo: string;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;

  timer: ReturnType<typeof setInterval>;

  //No es un evento del ciclo de vida del componente
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    console.log('on after view init');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }
  ngDoCheck(): void {
    console.log('do check')
  }
  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date()), 1000);

  }

}
