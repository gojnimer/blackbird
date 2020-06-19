import { IndexVeiculoComponent } from './index-veiculo/index-veiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {path:'', component:IndexVeiculoComponent},
 {path:'teste', component:IndexVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
