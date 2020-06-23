import { Component, OnInit, NgModule} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableLanguageItem } from '../table-language/table-language-datasource';
import { LanguageService } from 'app/services/language.service';

@Component({
  selector: 'app-modal-language',
  templateUrl: './modal-language.component.html',
  styleUrls: ['./modal-language.component.css']
})
export class ModalLanguageComponent implements OnInit {

  public name: string ;
  public key: string ;
  public languageId: number;
  public errorMessage: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  public initModal(language: TableLanguageItem) {
    this.name = language.name;
    this.key = language.langKey;
    this.languageId = language.id;
  }


  save() {
    this.errorMessage = null;
    if(!this.name || !this.key) {
      this.errorMessage = "Error procesando el formualario";
      return;
    }

    var language: TableLanguageItem;
    language = {
      id : this.languageId,
      name : this.name,
      langKey: this.key
    }

    this.activeModal.close(language);
  }

}
