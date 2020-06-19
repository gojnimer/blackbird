import { ErrorComponent } from './error/error.component';
import { LabComponent } from './lab/lab.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home',component:HomeComponent },
  {path:'test',component:LabComponent},
  {path:'veiculos', loadChildren: async () =>{
      let e = await import('./veiculos/veiculos.module');
      return e.VeiculosModule;}
  },

  {path:'**',component:ErrorComponent} 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
