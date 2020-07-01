import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  public containerId: number = null;
  public translates = [];
  

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public initModal(listLanguages: [], listContainer: [], translates:[]) {
    this.listLanguages = listLanguages;
    this.listContainer = listContainer;

    if(translates.length == 0) {
      this.listLanguages.forEach((language) => {
        var translate : TranslateItem = {
          id: null,
          value: "",
          langId: language.id
        };
        this.translates[language.langKey] = translate;
      });
    } else {
      this.translates = translates;
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
