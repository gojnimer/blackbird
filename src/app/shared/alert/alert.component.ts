import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() text:string;
  @Input() optClass:string = "";

  classes = "alert alert-danger " + this.optClass ;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert(this.classes);
  };

}
