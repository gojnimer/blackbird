import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSecurityService } from './services/global-security.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  context:string;

  ngOnInit(): void {
    

     this.activatedRoute.params.subscribe((obj) => {
       console.log(obj);
       console.log(obj.form);
       let ctx = obj.form;
       if(ctx != 'login' && ctx != 'cadastro'){
         ctx = 'login';
       }
       this.context = ctx;
     })
  }

}
