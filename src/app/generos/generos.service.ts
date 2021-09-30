import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneroDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  public obtenerTodos(): GeneroDTO[] {
    return this.http.get()
  }
}
