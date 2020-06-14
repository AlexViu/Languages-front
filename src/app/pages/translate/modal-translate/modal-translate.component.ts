import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-translate',
  templateUrl: './modal-translate.component.html',
  styleUrls: ['./modal-translate.component.css']
})
export class ModalTranslateComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
