import { Component, OnInit, OnChanges } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { carrito } from '../carrito.model';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  carritos:any[];
  constructor(public carrito:CarritoService) {}
  total:any=0;
  

  ngOnInit()
  {
   
  }
   
  
  ionViewDidEnter(){
     this.carritos = this.carrito.mostrar();
    console.log(this.carritos);
    this.total =0;
    this.carritos.forEach(element => {
    this.total = this.total + element.subtotal;
    });

  }
  

  ver()
  {
   
    console.log(this.carrito.mostrar());
  }

  eliminar(i:number,subtotal)
  {
    this.carrito.remove(i);
    this.total = this.total-subtotal;
    this.carritos = this.carrito.mostrar();
    
  }
}
