import { Component, OnInit, NgModule} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal-language',
  templateUrl: './modal-language.component.html',
  styleUrls: ['./modal-language.component.css']
})
export class ModalLanguageComponent implements OnInit {

  public name: String ;
  public key: String ;
  public errorMessage: String;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  save() {
    this.errorMessage = null;
    if(!this.name || !this.key) {
      this.errorMessage = "Error procesando el formualario";
      return;
    }
    
    console.log("El nombre es:" + this.name);
    console.log("La key es:" + this.key);

  }

}
