import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reserva-vista',
  templateUrl: './reserva-vista.page.html',
  styleUrls: ['./reserva-vista.page.scss'],
})
export class ReservaVistaPage implements OnInit {

  
  constructor(private reserva:ReservaService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {
       
    identificador: 0,
    montoPendiente:0,
    montoAdelantado:0,
    fechaEntrega:"-",
    reserva:0,
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.reserva.reservaOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }
}
