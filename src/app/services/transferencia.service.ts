import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private transferenciasRealizadas: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.transferenciasRealizadas = [];
  }

  get transferencias(){
    return this.transferenciasRealizadas;
  }

  all(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  addTransferencia(transferencia: Transferencia): Observable<Transferencia>{

    this.tratarDados(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private tratarDados(transferencia: any){
    transferencia.data = new Date();
  }
}
