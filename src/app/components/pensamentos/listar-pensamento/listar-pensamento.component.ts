import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Alura',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum ex, dictum et lorem non, venenatis fermentum est. Integer in feugiat mi. Nunc in turpis neque. Vestibulum nisi lacus, facilisis eget quam in, maximus vehicula nulla. Nulla facilisi proin.',
      autoria: 'Lorem ipsum',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
