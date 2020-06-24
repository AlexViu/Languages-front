import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableContainerItem } from '../table-container/table-container-datasource';
import { ContainerService } from 'app/services/container.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  public name: string ;
  public containerId: number;
  public errorMessage: string;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public initModal(container: TableContainerItem) {
    this.name = container.name;
    this.containerId = container.id;
  }

  save() {
    this.errorMessage = null;
    if(!this.name) {
      this.errorMessage = "Error procesando el formualario";
      return;
    }

    var container: TableContainerItem;
    container = {
      id : this.containerId,
      name : this.name,
    }
    console.log(container);
    this.activeModal.close(container);
  }

}
