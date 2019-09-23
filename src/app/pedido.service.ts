import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pedido } from './pedido.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }
  pedidoAll():Observable<pedido[]>
  {
    return this.http.get<pedido[]>('http://127.0.0.1:8000/pedidos');
  }

pedidoOne(id:number):Observable<pedido>
{
  
  return this.http.get<pedido>(`${'http://127.0.0.1:8000/pedidos/'}${id}`);
}

send(data,sucursal:number):Observable<pedido[]>
  {
    return this.http.post<pedido[]>('http://127.0.0.1:8000/pedidos?sucursal='+sucursal,data);
  }


post(data):Observable<pedido[]>
  {
    return this.http.post<pedido[]>('http://127.0.0.1:8000/pedido/'+data.pedido_id +'/productos',data);
  }
}
