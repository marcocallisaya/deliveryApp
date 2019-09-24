import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';
import { JarvisService } from '../jarvis.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  
  public loggedIn:boolean;
  user:any = {
    carnet: "",
    created_at: "",
    deleted_at: null,
    direction: "",
    email: "",
    id: 2,
    lastname: "",
    name: "",
    phone: "",
    remember_token: "",
    updated_at: "",
      };
  constructor(private auth:AuthService,private router:Router,private token:TokenService, private jarvis:JarvisService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value=>this.loggedIn = value);
    this.user=this.token.devolverUser();
  }


    logout(event:MouseEvent){
      event.preventDefault();
      this.token.remove();
      this.token.eliminarUser();
      this.auth.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
    }
    public tokenn:string = this.token.get();
    getjwt(event:MouseEvent){
      event.preventDefault();
      this.jarvis.get(this.tokenn);
    }
}
