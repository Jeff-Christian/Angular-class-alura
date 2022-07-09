import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: any;
  destino!: any;

  constructor(
    private service: TransferenciaService,
    private router: Router,
  ){}

  transferir() {

    if(this.valor === undefined){
      alert("Por favor, insira um valor válido!");
      return
    }

    if(this.destino === undefined){
      alert("Por favor, insira um destino válido!");
      return
    }

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.addTransferencia(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.clean();
      this.router.navigateByUrl('extrato');
    },
      (error) => console.error(error)
    );
  }

  clean(){
    this.valor = '';
    this.destino = '';
  }
}
