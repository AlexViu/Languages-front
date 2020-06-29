import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableTranslateDataSource, TableTranslateItem } from './table-translate-datasource';
import { TranslateService } from 'app/services/translate.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTranslateComponent } from '../modal-translate/modal-translate.component';
import { TranslateComponent } from '../translate.component';
import { LanguageService } from 'app/services/language.service';

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

  constructor(private translateService: TranslateService, private modalService: NgbModal, private languageService: LanguageService) {
  }
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['container', 'transKey'];
  public listLanguages = [];

  ngOnInit() {
    this.languageService.getLanguages().subscribe((response) => {
      this.listLanguages = response;
      this.listLanguages.forEach(language => {
        this.displayedColumns.push(language.langKey);
      });
      this.displayedColumns.push('actions');
      this.loadDataTable();
    });
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
