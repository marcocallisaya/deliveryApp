import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { categoria } from '../categoria.model';
import { producto } from '../producto.model';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private categoria:CategoriaService,private token:TokenService) {}
  
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
  categorias:categoria[];
  products: producto[];
  dato = {
    codigo:0
  };
  ngOnInit()
  {
    this.categoria.categoriaAll().subscribe((res:any)=>{this.categorias = res.data,console.log(res)});

    this.user=this.token.devolverUser();
  }

  f()
  {
    this.categoria.categoriaProducts(this.dato.codigo).subscribe((res:any)=>{this.products = res.data,console.log(res)});
  }

}
