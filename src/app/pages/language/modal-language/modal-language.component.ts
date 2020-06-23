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

  constructor(public activeModal: NgbActiveModal, private languageService: LanguageService) {}

  ngOnInit(): void {
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
  
    if(this.languageId) {
      this.languageService.editLanguage(language).subscribe((response) => {
        console.log(response);
        this.activeModal.close('Close click');
      });
    } else {
      this.languageService.addLanguage(language).subscribe((response) => {
        console.log(response);
        this.activeModal.close('Close click');
      });
    }

    
    
  }

}
