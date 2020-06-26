import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 


  lista:any[] = [
    {nome:'Gui', sobrenome:"Teste"},
    {nome:'Tar', sobrenome:"Teste2"},
    {nome:'Di', sobrenome:"Teste3"},
    {nome:'Vi', sobrenome:"Teste4"}
  ]

  indexList = 0;


  updateI(v){
    this.indexList = v;
  }

}
