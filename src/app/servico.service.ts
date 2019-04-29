import { Injectable } from '@angular/core';
import { Veiculo} from './Veiculo'

@Injectable()
export class ServicoService {
  private lista: number[] = [];
  constructor() { }
  add(veiculo: Veiculo): void {
    
    let aux: Veiculo = {
      marca: veiculo.marca,
      valor: veiculo.valor,
      ipva: veiculo.ipva,
      tipo: veiculo.tipo
    };
    this.lista.push(veiculo);
  }
}