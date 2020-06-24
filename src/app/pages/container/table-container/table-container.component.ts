import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableContainerDataSource, TableContainerItem } from './table-container-datasource';
import { ContainerService } from 'app/services/container.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ContainerComponent } from '../container.component';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { ModalConfirmComponent } from 'app/pages/modal-confirm/modal-confirm.component';


@Component({
  selector: 'table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableContainerItem>;
  
  data: TableContainerItem[] = [];
  dataSource: TableContainerDataSource;

  constructor(private containerService: ContainerService, private modalService: NgbModal) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'actions'];


  ngOnInit() {
    this.loadDataTable();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  create() {
    const modalRef = this.modalService.open(ModalContainerComponent);
    modalRef.result.then((result) => {
      this.containerService.addContainer(result).subscribe(() => {
        this.loadDataTable();
      });
    });
  }

  edit(container: TableContainerItem) {
    const modalRef = this.modalService.open(ModalContainerComponent);
    modalRef.componentInstance.initModal(container);
    modalRef.result.then((result) => {
      this.containerService.editContainer(result).subscribe(() => {
        this.loadDataTable();
      });
    });
  }

  delete(container: TableContainerItem) {
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.initModal(`¿Deseas eliminar el contenedor ${container.name}?`);
    modalRef.result.then((response) => {
      if(response) {
        this.containerService.deleteLanguage(container.id).subscribe((response) => {
          if(response) {
            this.loadDataTable();
          }
        });
      }
    });
  }

  loadDataTable() {
    this.containerService.getContainer().subscribe((container: TableContainerItem[]) => {
      this.dataSource = new TableContainerDataSource(container);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }); 
  }
}
