import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [LoginComponent, FormComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
