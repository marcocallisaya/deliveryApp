import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from './producto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  productoOne(id:number):Observable<producto>
  {
    
    return this.http.get<producto>(`${'http://127.0.0.1:8000/productos/'}${id}`);
  }
}
