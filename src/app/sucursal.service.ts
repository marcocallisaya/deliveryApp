import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http:HttpClient) { }

  sucursalAll():Observable<any[]>
    {
      return this.http.get<any[]>('http://127.0.0.1:8000/sucursals');
    }
}
