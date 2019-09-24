import { Component, OnInit, OnChanges } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { carrito } from '../carrito.model';
import { PedidoService } from '../pedido.service';
import { pedido } from '../pedido.model';
import { AlertController } from '@ionic/angular';
import { SucursalService } from '../sucursal.service';
import { reserva } from '../reserva.model';
import { ReservaService } from '../reserva.service';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  carritos:any[];
  constructor(public carrito:CarritoService,private pedido:PedidoService,public alertController: AlertController,private Sucursal:SucursalService,private RS:ReservaService,private token:TokenService) {}
  total:any=0;
  fecha;
  sucursal:number;
  sucursals:any[];
  pedidos:any[];
  tipo=true;
  
  id_ultimo_pedido:number;
  montoAdelantado;
  fechaEntregar;

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

  Reserva:any={
    pedido:0,
    montoPendiente:0,
    montoAdelantado:0,
    fechaEntrega:'',
  };
  carro:any={
    producto_id:0,
       pedido_id:0,
       quantity:0,
        subtotal:0,
        price:0,
  };
  Mypedido:pedido={
    administrador:0,
    cliente:0,
    conductor:0,
    precio:0,
    estado:''
  };
  ngOnInit()
  {
   this.Sucursal.sucursalAll().subscribe((res:any)=>this.sucursals = res.data);
   this.user=this.token.devolverUser();
  }
   
  
  ionViewDidEnter(){
    this.pedido.pedidoAll().subscribe((res:any)=>this.pedidos = res.data);
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

  f(tipo)
  {
    if (tipo=='reserva')
    {
      this.tipo = false;
    }

    if (tipo=='pedido')
    {
      this.tipo = true;
    }
    
  }

  eliminar(i:number,subtotal)
  {
    this.carrito.remove(i);
    this.total = this.total-subtotal;
    this.carritos = this.carrito.mostrar();
    
  }

 async sendpedido()
  {
    if (this.total>0)
    {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Pedido realizado exitosamente',
        buttons: ['OK']
      });
  
      this.Mypedido.administrador = 1;
      this.Mypedido.conductor = 2;
      this.Mypedido.cliente = 1;
      this.Mypedido.estado = 'espera';
      this.Mypedido.precio = this.total;
      console.log(this.Mypedido);
      this.pedido.send(this.Mypedido,this.sucursal).subscribe((res:any)=>console.log('Pedido realiado exitosamente con sucursal '+ this.sucursal));

     
      // parte ṕara ingresar los detalles del pedido
      
      this.id_ultimo_pedido = this.pedidos[this.pedidos.length-1].identificador+1;
      console.log(this.id_ultimo_pedido);

      


      this.carritos.forEach(element => {
        this.carro={
          producto_id:0,
             pedido_id:0,
             quantity:0,
              subtotal:0,
              price:0,
        };
        this.carro.producto_id = element.producto_id;
        this.carro.pedido_id = this.id_ultimo_pedido;
        this.carro.quantity = element.quantity;
        this.carro.subtotal = element.subtotal;
        this.carro.price = element.price;
        console.log(this.carro);
        this.pedido.post(this.carro).subscribe(res=>console.log('exitoso'));
      });

    }
   
  }

 async reserva()
  {
    if (this.total>0)
    {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Reserva realizada exitosamente',
        buttons: ['OK']
      });
  
      this.Mypedido.administrador = 1;
      this.Mypedido.conductor = 2;
      this.Mypedido.cliente = 1;
      this.Mypedido.estado = 'reserva';
      this.Mypedido.precio = this.total;
      console.log(this.Mypedido);
     this.pedido.send(this.Mypedido,this.sucursal).subscribe((res:any)=>console.log('Pedido realiado exitosamente con sucursal '+ this.sucursal));

      // parte ṕara ingresar los detalles del pedido
      
      this.id_ultimo_pedido = this.pedidos[this.pedidos.length-1].identificador+1;
      console.log(this.id_ultimo_pedido);

        // parte para registrar la reserva

        this.Reserva.pedido = this.id_ultimo_pedido;
        this.Reserva.fechaEntrega = this.fechaEntregar;
        this.Reserva.montoAdelantado = this.montoAdelantado;
        this.Reserva.montoPendiente= this.total - this.montoAdelantado;
        this.RS.send(this.Reserva).subscribe(res=>console.log(this.Reserva),err=>console.log(err));
        
      this.carritos.forEach(element => {
        this.carro={
          producto_id:0,
             pedido_id:0,
             quantity:0,
              subtotal:0,
              price:0,
        };
        this.carro.producto_id = element.producto_id;
        this.carro.pedido_id = this.id_ultimo_pedido;
        this.carro.quantity = element.quantity;
        this.carro.subtotal = element.subtotal;
        this.carro.price = element.price;
        console.log(this.carro);
       this.pedido.post(this.carro).subscribe(res=>console.log('exitoso'));
      });
     
    }
  }
}
