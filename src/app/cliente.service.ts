import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http:HttpClient) { }

  send(data):Observable<any>
  {
    return this.http.post<any>('http://127.0.0.1:8000/clientes',data);
  }

  pedidos(id:number)
  {
    return this.http.get<any[]>('http://127.0.0.1:8000/cliente/'+id+'/pedidos');
  }

  reservas(id:number)
  {
    return this.http.get<any[]>('http://127.0.0.1:8000/cliente/'+id+'/reservas');
  }
}
