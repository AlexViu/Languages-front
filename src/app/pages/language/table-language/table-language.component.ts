import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableLanguageDataSource, TableLanguageItem } from './table-language-datasource';
import { LanguageService } from 'app/services/language.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { LanguageComponent } from '../language.component';
import { ModalLanguageComponent } from '../modal-language/modal-language.component';
import { ModalConfirmComponent } from 'app/pages/modal-confirm/modal-confirm.component';

@Component({
  selector: 'table-language',
  templateUrl: './table-language.component.html',
  styleUrls: ['./table-language.component.css']
})
export class TableLanguageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableLanguageItem>;

  data: TableLanguageItem[] = [];
  dataSource: TableLanguageDataSource;


  constructor(private languageService: LanguageService, private modalService: NgbModal) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. 
   * ng generate @angular/material:table pages/language/table-language
  */
  displayedColumns = ['id', 'name', 'langKey', 'actions'];

  ngOnInit() {
    this.loadDataTable();
  }

  edit(language: TableLanguageItem) {
    const modalRef = this.modalService.open(ModalLanguageComponent);
    modalRef.componentInstance.initModal(language);
    modalRef.result.then((result) => {
      this.languageService.editLanguage(result).subscribe(() => {
        this.loadDataTable();
      });
    });
  }

  create() {
    const modalRef = this.modalService.open(ModalLanguageComponent);
    modalRef.result.then((result) => {
      this.languageService.addLanguage(result).subscribe(() => {
        this.loadDataTable();
      });
    });
    console.log("Sale");
  }

  delete(language: TableLanguageItem) {
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.initModal(`¿Deseas eliminar el idioma ${language.name}?`);
    modalRef.result.then((response) => {
      if(response) {
        this.languageService.deleteLanguage(language.id).subscribe((response) => {
          if(response) {
            this.loadDataTable();
          }
        });
      }
    });
  }

  loadDataTable() {
    this.languageService.getLanguages().subscribe((languages: TableLanguageItem[]) => {
      this.dataSource = new TableLanguageDataSource(languages);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }); 
  }
}
