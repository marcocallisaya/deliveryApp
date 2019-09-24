import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { ClienteService } from '../cliente.service';
import { ReservaService } from '../reserva.service';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  pedidos: any[] ;
  reservas: any[] ;
  displayedColumns: string[] = ['identificador','precio', 'estado','ver'];
  displayedColumns1: string[] = ['identificador','A Cuenta','Pendiente','ver'];
  constructor(private token:TokenService, private cliente:ClienteService,private router:Router) {}
 
  pedidoBandera=true;
  reservaBandera=false;
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
      ngOnInit()
      {
        this.user=this.token.devolverUser();
        this.cliente.pedidos(this.user.id).subscribe((res:any)=>this.pedidos = res.data);
        this.cliente.reservas(this.user.id).subscribe((res:any)=>this.reservas = res.data);
      }

      verReserva(codigo:number)
      {
       console.log('reserva'+ codigo);
       this.router.navigate(['/menu/tabs/reserva/',codigo]);
       // this.router.navigate('/menu/tabs/reserva'+codigo);
       
      }

      verPedido(codigo:number)
      {
        console.log('pedido'+ codigo);
      }

      cargarAdm()
      {
        this.pedidoBandera=true;
        this.reservaBandera=false;
      }

      cargarChr()
      {
        this.pedidoBandera=false;
        this.reservaBandera=true;
      }
}
