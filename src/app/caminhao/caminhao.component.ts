import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Veiculo, marcas } from '../veiculo';
@Component({
  selector: 'app-caminhao',
  templateUrl: './caminhao.component.html',
  styleUrls: ['./caminhao.component.css']
})
export class CaminhaoComponent implements OnInit {
  private ipva: number = 0.015;
  private marcas: string[];
  private veiculo: Veiculo;
  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.marcas = marcas;
    this.reset();
  }
  salvar(): void{
    this.servico.add(this.veiculo);
    this.reset();
  }
  reset(): void {
    this.veiculo = {
    marca: undefined,
    valor: undefined,
    ipva: undefined,
    tipo: 'caminhao'
    };
  }
}