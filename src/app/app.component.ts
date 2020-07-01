
import { Component } from '@angular/core';
import { GlobalSecurityService } from './security/services/global-security.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private loginService:GlobalSecurityService){
    
    this.loginService.Logged.subscribe((novoValor) =>{
      this.canShow = novoValor;
    })
    

    this.loginService.Logged.next(this.loginService.isUserLoggedIn());
   
   
  }

  canShow:boolean = false;
  
 

}
