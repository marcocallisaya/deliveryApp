import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pedido-vista',
  templateUrl: './pedido-vista.page.html',
  styleUrls: ['./pedido-vista.page.scss'],
})
export class PedidoVistaPage implements OnInit {

  public dato=
    
  {
       
    identificador: 0,
    precio:0,
    estado:"-",
    cliente:"Juan",
    conductor:0,
    administrador:0
          
 }; 

  constructor(private pedido:PedidoService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

   this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.pedido.pedidoOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

}
