import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableLanguageDataSource, TableLanguageItem } from './table-language-datasource';
import { LanguageService } from 'app/services/language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'table-language',
  templateUrl: './table-language.component.html',
  styleUrls: ['./table-language.component.css']
})
export class TableLanguageComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableLanguageItem>;
  data: TableLanguageItem[] = [];
  dataSource: TableLanguageDataSource;


  constructor(private languageService: LanguageService) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. 
   * ng generate @angular/material:table pages/language/table-language
  */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.languageService.getLanguages().subscribe((languages: TableLanguageItem[]) => {
      console.log(languages);
      this.dataSource = new TableLanguageDataSource(languages);
    });
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
