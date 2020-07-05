import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableTranslateItem } from '../table-translate/table-translate-datasource';

export interface TranslateItem {
  id?: number;
  value: string;
  langId: number;
}


@Component({
  selector: 'app-modal-translate',
  templateUrl: './modal-translate.component.html',
  styleUrls: ['./modal-translate.component.css']
})

export class ModalTranslateComponent implements OnInit {
  public listLanguages = [];
  public listContainer = [];
  public transKey = "";
  public containerId: number;
  public translates = [];
  

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public initModal(listLanguages: [], listContainer: [], translates: TableTranslateItem) {
    this.listLanguages = listLanguages;
    this.listContainer = listContainer;
    this.transKey = translates.transKey;
    this.containerId = (translates.containerId) ? translates.containerId : null;

    if(translates.translate == undefined) {
      this.listLanguages.forEach((language) => {
        var translate : TranslateItem = {
          id: null,
          value: "",
          langId: language.id
        };
        this.translates[language.langKey] = translate;
      });
    } else {
      this.translates = translates.translate;
    }
  }

  save() {
    var result: any;

    var arrayTranslate = [];
    this.listLanguages.forEach((language) => {
      arrayTranslate.push(this.translates[language.langKey]);
    });

    result = {
      transKey : this.transKey,
      containerId : this.containerId,
      translates : arrayTranslate
    }
    this.activeModal.close(result);
  }
}
