import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-language',
  templateUrl: './modal-language.component.html',
  styleUrls: ['./modal-language.component.css']
})
export class ModalLanguageComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }



}
