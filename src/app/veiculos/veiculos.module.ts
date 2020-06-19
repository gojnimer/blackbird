import { VeiculosRoutingModule } from './veiculos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexVeiculoComponent } from './index-veiculo/index-veiculo.component';



@NgModule({
  declarations: [ IndexVeiculoComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ],
  exports:[IndexVeiculoComponent]
})
export class VeiculosModule { }
