import { LoginService } from './login/login.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private loginService:LoginService){
    
    this.loginService.Logged.subscribe((novoValor) =>{
      this.canShow = novoValor;
    })
    

    this.loginService.Logged.next(this.loginService.isUserLoggedIn());
   
   
  }

  canShow:boolean = false;
  
 

}
