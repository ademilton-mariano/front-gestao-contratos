import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {
  @Input() titulo: string = '';
  @Input() visivel: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<void>();

  Fechar() {
    this.visivel = false;
    this.onClose.emit();
  }

  Enviar() {
    this.onSubmit.emit();
  }
}
