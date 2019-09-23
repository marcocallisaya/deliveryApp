import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { categoria } from '../categoria.model';
import { producto } from '../producto.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private categoria:CategoriaService) {}

  categorias:categoria[];
  products: producto[];
  dato = {
    codigo:0
  };
  ngOnInit()
  {
    this.categoria.categoriaAll().subscribe((res:any)=>{this.categorias = res.data,console.log(res)});

   
  }

  f()
  {
    this.categoria.categoriaProducts(this.dato.codigo).subscribe((res:any)=>{this.products = res.data,console.log(res)});
  }

}
