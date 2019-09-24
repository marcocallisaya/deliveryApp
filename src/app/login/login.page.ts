import { Component, OnInit } from '@angular/core';
import { JarvisService } from '../jarvis.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form = {
    email:null,
    password:null
  }
    
  public error = null;

  constructor(private jarvis:JarvisService,
    private token:TokenService, private router:Router
    ,private Auth:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
  this.jarvis.login(this.form)
   .subscribe(
     data => this.handleResponse(data),
     error =>this.handleError(error)
   );
  }

 handleError(error){
  this.error = error.error.error;
 }
 handleResponse(data){
   console.log(data);
   this.token.handleuser(data.user);
  this.token.handle(data.access_token);
  this.Auth.changeAuthStatus(true);
  this.router.navigateByUrl('/menu/tabs/tab1');
 }
}
