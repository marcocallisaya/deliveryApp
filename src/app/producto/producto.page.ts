import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CarritoService } from '../carrito.service';
import { carrito } from '../carrito.model';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private producto:ProductoService,private route:ActivatedRoute,private router:Router,public alertController: AlertController,public carrito:CarritoService) { }
  public dato=
    
  {
    identificador:0,   
    nombre:"J",
    precio:0.0,
    img:"-",
    stock:0,
    reserva:0,
    estado:"-",
    proveedor:0, 
    categoria:0,
          
 }; 

 carro:carrito = {
   pedido_id:0,
   quantity:0,
   producto_id:0,
   price:0,
   subtotal:0,
 };
 cantidad:number=0;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.producto.productoOne(id).subscribe((res:any)=> {this.dato=res.data,console.log(res)});
       
      }
      
      });
  }

  async send() {
    if (this.cantidad>0)
    {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Producto '+ this.dato.nombre,
        message: 'Agregado exitosamente al carrito la cantidad de.'+ this.cantidad,
        buttons: ['OK']
      });
      this.carro.producto_id = this.dato.identificador;
      this.carro.price = this.dato.precio;
      this.carro.quantity = this.cantidad;
      this.carro.subtotal = this.cantidad*this.dato.precio;

      this.carrito.add(this.carro);
      await alert.present();
    }
    
  }

  add()
  {
    this.cantidad++;
  }

  remove(){
    if (this.cantidad>0)
    {
      this.cantidad--;
    }
  }

  ver()
  {
    console.log(this.carrito.mostrar());
  }

  
}
