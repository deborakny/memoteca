import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento-modal',
  templateUrl: './excluir-pensamento-modal.component.html',
  styleUrls: ['./excluir-pensamento-modal.component.css']
})
export class ExcluirPensamentoModalComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamento'])
      });
    }
  }

  cancelarExclusao() {
    this.router.navigate(['listar-pensamento']);
  }

}
