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

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento);
  }

  excluirPensamento(id: number): Observable<Pensamento> {
    const url = `${this.api}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.api}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.api}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

}
