import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private servico: ServicoService) { }

  ngOnInit() {
  }

}