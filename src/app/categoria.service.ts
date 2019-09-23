import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { categoria } from './categoria.model';
import { producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  categoriaAll():Observable<categoria[]>
    {
      return this.http.get<categoria[]>('http://127.0.0.1:8000/categorias');
    }

 categoriaProducts(id:number):Observable<producto[]>
    {
      
      return this.http.get<producto[]>(`${'http://127.0.0.1:8000/categoria/'}${id}${'/productos'}`);
    }
}
