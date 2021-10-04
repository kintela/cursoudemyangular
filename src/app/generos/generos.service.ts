import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneroDTO, GeneroCreacionDTO } from './genero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL + 'generos';

  public obtenerTodos(): Observable<GeneroDTO[]> {
    return this.http.get<GeneroDTO[]>(this.apiURL);
  }

  public crear(genero:GeneroCreacionDTO){
    return this.http.post(this.apiURL,genero);
  }
}
