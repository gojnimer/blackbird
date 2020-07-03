import { SharedModule } from './../shared/shared.module';
import { GlobalSecurityService } from './services/global-security.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { SecurityComponent } from './security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [LoginFormComponent, CadastroFormComponent, SecurityComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[GlobalSecurityService],
  exports:[SecurityComponent]
})
export class SecurityModule { }
