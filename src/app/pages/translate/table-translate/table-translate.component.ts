import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableTranslateDataSource, TableTranslateItem } from './table-translate-datasource';
import { TranslateService } from 'app/services/translate.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTranslateComponent, TranslateItem } from '../modal-translate/modal-translate.component';
import { TranslateComponent } from '../translate.component';
import { LanguageService } from 'app/services/language.service';
import { ContainerService } from 'app/services/container.service';
import { ModalConfirmComponent } from 'app/pages/modal-confirm/modal-confirm.component';
import {Location} from '@angular/common';
import { AppSettings } from 'app/constants';

@Component({
  selector: 'table-translate',
  templateUrl: './table-translate.component.html',
  styleUrls: ['./table-translate.component.css']
})
export class TableTranslateComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableTranslateItem>;
 
  dataSource: TableTranslateDataSource;

  constructor(private translateService: TranslateService, private modalService: NgbModal, private languageService: LanguageService, private containerService: ContainerService, private location: Location) {
  }
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['container', 'transKey'];
  public listLanguages = [];
  public listContainer = [];
  public transKey = "";
  public translateLabel = "Generar Zip de traducciones";
  public downloadLink  = "";

  ngOnInit() {
    this.containerService.getContainer().subscribe((response) => {
      this.listContainer = response;
    });

    this.languageService.getLanguages().subscribe((response) => {
      this.listLanguages = response;
      this.listLanguages.forEach(language => {
        this.displayedColumns.push(language.langKey);
      });
      this.displayedColumns.push('actions');
      this.loadDataTable();
    });
  }

  create() {
    const modalRef = this.modalService.open(ModalTranslateComponent,{ size: 'xl' });

    modalRef.componentInstance.initModal(this.listLanguages, this.listContainer, []);
    modalRef.result.then((result) => {
      this.translateService.addTranslate(result).subscribe(() => {
        this.loadDataTable();
      });

    });
  }

  edit(translate: TableTranslateItem) {
    const modalRef = this.modalService.open(ModalTranslateComponent, { size: 'xl' });
    modalRef.componentInstance.initModal(this.listLanguages, this.listContainer, translate);
    
    modalRef.result.then((result) => {
      this.translateService.editTranslate(result).subscribe(() => {
        this.loadDataTable();
      });
    });
  }

  delete(translate: TableTranslateItem) {
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.initModal(`¿Deseas eliminar la traduccion de ${translate.transKey}?`);
    modalRef.result.then((response) => {
      if(response) {
        this.translateService.deleteTranslate(translate).subscribe((response) => {
          if(response) {
            this.loadDataTable();
          }
        });
      }
    });
  }

  download() {
    this.translateService.download().subscribe((response) => {
        this.translateLabel = "Descargar zip";
        this.downloadLink = `${AppSettings.BASE_URL}${response.url}`;
    });
  }

  save() {
    console.log(this.transKey);
  }

  loadDataTable() {
    this.translateService.getTranslates().subscribe((translate: TableTranslateItem[]) => {
      this.dataSource = new TableTranslateDataSource(translate);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }); 
  }

}
