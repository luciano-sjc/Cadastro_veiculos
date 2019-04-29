import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarroComponent } from './carro/carro.component';
import { CaminhaoComponent } from './caminhao/caminhao.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ServicoService } from './servico.service';
import { NumeroDirective } from './numero.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CarroComponent, CaminhaoComponent, TabelaComponent, NumeroDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
