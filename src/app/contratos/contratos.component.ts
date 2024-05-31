import { Component } from '@angular/core';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.less']
})
export class ContratosComponent {
  modalEhVisivel: boolean = false;
  modalTitulo: string = '';

  AbreModal(action: string) {
    this.modalTitulo = action;
    this.modalEhVisivel = true;
  }

  FechaModal() {
    this.modalEhVisivel = false;
  }

  EnviaFormulario() {
    // Implementar lógica para enviar dados para o backend
    console.log('Formulário enviado');
    this.FechaModal();
  }
}
