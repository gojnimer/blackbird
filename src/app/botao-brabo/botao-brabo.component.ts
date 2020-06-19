import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'botao-brabo',
  templateUrl: './botao-brabo.component.html',
  styleUrls: ['./botao-brabo.component.css']
})
export class BotaoBraboComponent implements OnInit {

  constructor() { }
  
  @Input() titulo:boolean;

  @Output() clickBtnBrabo = new EventEmitter();

  ngOnInit(): void {
  }
  btnClick(){
    console.log();
    this.clickBtnBrabo.emit();
  }

}
