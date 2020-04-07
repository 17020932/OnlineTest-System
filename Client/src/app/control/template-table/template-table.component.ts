import { element } from 'protractor';
import { EnumDataType } from './../../common/enum-common';
import { column } from './../../models/column';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatCheckbox } from '@angular/material';
import { timer } from 'rxjs';

@Component({
  selector: 'template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.scss']
})
export class TemplateTableComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input()
  totalPage: any;

  @Input()
  displayedColumns: string[] = [];

  @Input()
  dataSource = new MatTableDataSource<any>();

  @Input()
  Columns: Array<column> = [];

  // tslint:disable-next-line: no-output-native
  @Output()
  open: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
  }

  openBottomsheet(element) {
    this.open.emit(element);
  }

}