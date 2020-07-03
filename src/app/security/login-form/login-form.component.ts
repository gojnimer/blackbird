import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalSecurityService } from '../services/global-security.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  constructor(private fb:FormBuilder,private util:GlobalSecurityService,private router:Router) { }

  loginForm:FormGroup = this.fb.group({
    usuario: ['',[Validators.required, Validators.email]],
    senha:['',[Validators.required]]
  });

  loginRequest: Subscription;
  
   
  onSubmit(){
    console.log(this.loginForm.controls.usuario.errors?.required);
    console.log(this.loginForm.controls.usuario.touched);
 /*   console.log(this.loginForm); */
  
   if(this.loginForm.invalid){
     alert("campos invalidos");
     return;
   }
   this.loginRequest = this.util.appLogin(this.loginForm.value).subscribe((response:any) => {
      console.log(response);
      
      if(response.length == 0){
       alert("usuário não encontrado");
      }else{
        localStorage.setItem("token",JSON.stringify({user:response[0].usuario,userid:response[0].id}))
        this.router.navigate([""]);
        this.util.Logged.next(this.util.isUserLoggedIn());
      }
   });


  }

  ngOnInit(): void {
    console.log(this.loginForm);
    localStorage.clear();
/*     this.util.Logged.next(false); */
  }

  ngOnDestroy(){
    this.loginRequest.unsubscribe();
  }

}
