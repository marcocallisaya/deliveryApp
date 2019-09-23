import { Injectable } from '@angular/core';
import { carrito } from './carrito.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  products: any[];
  

  constructor() { 
    this.products = [];
  }

  add(product: any)
  {
    this.products.push(product);
    
  }

  mostrar()
  {
   
   return this.products;
  }


remove(index: number) {

  if (index > -1) {
  this.products.splice(index, 1);
  }
  
  }
  
  limpiar() {
  
  this.products = [];
  
  }
  
}
