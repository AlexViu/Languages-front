import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableTranslateItem } from '../table-translate/table-translate-datasource';
import { TranslateComponent } from '../translate.component';
import { LanguageComponent } from 'app/pages/language/language.component';
import { TranslateService } from 'app/services/translate.service';

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

export class ModalTranslateComponent {
  public listLanguages = [];
  public listContainer = [];
  public transKey = "";
  public containerId: number;
  public translates = [];
  public text: "";
  public source: "";
  

  constructor(public activeModal: NgbActiveModal, private translateService: TranslateService) { }

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

    if(this.transKey == null) {
      return;
    }

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
 
  auto() {
    if(this.translates["es"].value == "") {
      return;
    }
    var translate: any;
    translate = {
      text : this.translates["es"].value ,
      source :"es",
    }

    this.translateService.autoTranslate(translate).subscribe((response) => {
      if(response) {
          response.forEach((value) => {
            translate = this.translates[value['source']];
            translate.value = value['text'];
          }); 
      }
    });
  }
}