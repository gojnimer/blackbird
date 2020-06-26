import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  Logged:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  getUsuario(){
    return true;
  }
 
  isUserLoggedIn():boolean{
    let t = localStorage.getItem('token');
    return t ? true : false;
  }

}
