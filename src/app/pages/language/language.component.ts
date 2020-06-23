import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLanguageComponent } from './modal-language/modal-language.component';
import { TableLanguageItem } from './table-language/table-language-datasource';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    
    const modalRef = this.modalService.open(ModalLanguageComponent);
  }
}
