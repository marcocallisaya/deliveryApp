import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reserva } from './reserva.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http:HttpClient) { }

  send(data):Observable<any>
  {
    return this.http.post<any>('http://127.0.0.1:8000/reservas',data);
  }
}
