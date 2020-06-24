import { Component, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  public message:string;

  initModal(message: string){
    this.message = message;
  }

  ngOnInit(): void {
  }

  cancel() {
    this.activeModal.close(false);
  }

  confirm() {
    this.activeModal.close(true);
  }
}
