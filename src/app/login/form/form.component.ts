import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private log:LoginService,private rota:Router) { }

  title ;
  ngOnInit(): void {
    this.title = this.log.getUsuario();
  }

  teste(){
    this.log.getUsuario();
    
    this.title = !this.title;
  }

  logar(){
    localStorage.setItem('token','logado');
    this.rota.navigate(['/']);
  }

}
