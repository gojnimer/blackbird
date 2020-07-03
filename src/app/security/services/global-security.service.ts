import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalSecurityService {

  constructor(private http:HttpClient) { }

  Logged:BehaviorSubject<boolean> = new BehaviorSubject(false);

  appLogin(body){

    //EXEMPLO POST return this.http.post("http://localhost:3000/usuarios"  ,body);

    return this.http.get("http://localhost:3000/usuarios?usuario=" + body.usuario + "&senha=" + body.senha);
  }

  appCadastro(body){
    return this.http.post("http://localhost:3000/usuarios",body);
  }

  isUserLoggedIn():boolean{
    let t = localStorage.getItem('token');
    return t ? true : false;
  }
}
