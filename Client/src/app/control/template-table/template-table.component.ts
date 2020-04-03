import { EnumDataType } from './../../common/enum-common';
import { column } from './../../models/column';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { timer } from 'rxjs';

@Component({
  selector: 'template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.scss']
})
export class TemplateTableComponent implements OnInit {

  constructor() { }

  @Input()
  displayedColumns: string[] = ['select', 'name', 'datePublic', 'time', 'status', 'amount'];

  @Input()
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @Input()
  Columns: Array<column> = [
    {
      type: EnumDataType.selectBox,
      name: '',
      dataIndex: 'select',
      selected: false
    },
    {
      type: EnumDataType.default,
      name: 'tên đề thi',
      dataIndex: 'name',
      selected: false
    },
    {
      type: EnumDataType.date,
      name: 'ngày xuất bản',
      dataIndex: 'datePublic',
      selected: false
    },
    {
      type: EnumDataType.number,
      name: 'thời gian (phút)',
      dataIndex: 'time',
      selected: false
    },
    {
      type: EnumDataType.status,
      name: 'trạng thái',
      dataIndex: 'status',
      selected: false
    },
    {
      type: EnumDataType.number,
      name: 'Số lượt thi',
      dataIndex: 'amount',
      selected: false
    }
  ];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  checkAll: boolean = false;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  // check all row
  toggleCheckAll(){
    const me = this;
    me.checkAll = !me.checkAll;
    me.Columns.map(col => col.selected = me.checkAll);
  }

}


export interface PeriodicElement {
  name: string;
  select: number;
  datePublic: Date;
  time: any;
  status: number;
  amount: number;
}
const date = new Date();
// const time = new TimeRanges();
const ELEMENT_DATA: PeriodicElement[] = [
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
  {select: 1, name: 'Hydrogen', datePublic: date, time: 90, status: 1, amount: 100},
];