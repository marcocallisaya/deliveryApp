import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';
import { JarvisService } from '../jarvis.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public dato={
    identificador:0,
    nombre:"Juan",
    apellidos:"P",
    correo:"@gmail",
    direccion:"B/..",
    telefono:"3",
    carnet:"....",
    contrasena:"",
  }; 

  public form = {
    email:null,
    password:null
  }
  constructor(private router:Router,private cliente:ClienteService,private jarvis:JarvisService,
    private token:TokenService,
    private Auth:AuthService) { }

  ngOnInit() {
  }
 send()
  {
   this.cliente.send(this.dato).subscribe(res=>alert('Registro Exitoso'),err=>alert('Registro Fallido'));
    console.log('exitoso');
    this.form.email = this.dato.correo;
    this.form.password = this.dato.contrasena;

    this.onSubmit();

    this.router.navigate(['/menu/tabs/tab1',]
    );
  }

  onSubmit(){
    this.jarvis.login(this.form)
     .subscribe(
       data => this.handleResponse(data),
       error =>console.log(error)
     );
    }
  
   
   handleResponse(data){
     console.log(data);
     this.token.handleuser(data.user);
    this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/menu/tabs/tab1');
   }

  back()
  {
    this.router.navigate(['/login',]
  );
  }
}
