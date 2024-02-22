import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly api = 'http://localhost:3000/pensamentos'

  constructor(
    private http: HttpClient
  ) { }

  listarPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.api);
  }
}
