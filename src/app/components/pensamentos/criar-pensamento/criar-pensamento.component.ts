import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2',
  }

  constructor() { }

  ngOnInit(): void {
  }

  salvarPensamento() {
    alert('Pensamento salvo com sucesso');
  }

  cancelar() {
    alert('Envio cancelado');
  }

}
