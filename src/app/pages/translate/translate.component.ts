import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTranslateComponent } from './modal-translate/modal-translate.component';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    
  }

  open() {
    const modalRef = this.modalService.open(ModalTranslateComponent);
    modalRef.componentInstance.name = 'World';
  }

}
