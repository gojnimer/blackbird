import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  constructor() { }

  inputText:string = "teste";

  ngOnInit(): void {
  }


  btnClick(){
    alert(this.inputText);
  }

  onSearchChange(a){
    this.inputText = a;
  }
}
