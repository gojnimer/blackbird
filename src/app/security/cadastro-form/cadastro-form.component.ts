import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GlobalSecurityService } from '../services/global-security.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private util:GlobalSecurityService,private router:Router) { }

  loginForm:FormGroup = this.fb.group({
    usuario: ['',[Validators.required, Validators.email]],
    senha:['',[Validators.required]],
    nome:['',[Validators.required]],
    cep:['',[Validators.required]]
  });

  loginRequest: Subscription;


  onSubmit(){
    console.log(this.loginForm);
 /*   console.log(this.loginForm); */
  
   if(this.loginForm.invalid){
     alert("campos invalidos");
     return;
   }
   this.loginRequest = this.util.appCadastro(this.loginForm.value).subscribe((response:any) => {
      console.log(response.status);
      
      this.router.navigate([""]);
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
