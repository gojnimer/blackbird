import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private log:LoginService) { }

  title ;
  ngOnInit(): void {
    this.title = this.log.getUsuario();
  }

  teste(){
    this.log.getUsuario();
    
    this.title = !this.title;
  }

}
